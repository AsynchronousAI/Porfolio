"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";
import {
  Skeleton,
  ActivityCalendar,
} from "@1chooo/activity-calendar/components/activity-calendar";
import type { ThemeInput } from "@1chooo/activity-calendar/types";
import type { Props as ActivityCalendarProps } from "@1chooo/activity-calendar/components/activity-calendar";
import { transformData } from "@1chooo/github-calendar/lib";
import type {
  Activity,
  ApiErrorResponse,
  ApiResponse,
  Year,
} from "@1chooo/github-calendar/types";

export type Props = {
  username: string;
  errorMessage?: string;
  throwOnError?: boolean;
  transformData?: (data: Array<Activity>) => Array<Activity>;
  transformTotalCount?: boolean;
  year?: Year;
} & Omit<ActivityCalendarProps, "data">;

async function fetchCalendarData(
  username: string,
  year: Year,
): Promise<ApiResponse> {
  const apiUrl = "https://github-contributions-api.jogruber.de/v4/";
  const response = await fetch(`${apiUrl}${username}?y=${String(year)}`);
  const data = (await response.json()) as ApiResponse | ApiErrorResponse;

  if (!response.ok) {
    throw Error(
      `Fetching GitHub contribution data for "${username}" failed: ${(data as ApiErrorResponse).error}`,
    );
  }

  return data as ApiResponse;
}

const GitHubCalendar = forwardRef<HTMLElement, Props>(
  (
    {
      username,
      year = "last",
      labels,
      transformData: transformFn,
      transformTotalCount = true,
      throwOnError = false,
      errorMessage = `Error – Fetching GitHub contribution data for "${username}" failed.`,
      ...props
    },
    ref,
  ) => {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = useCallback(() => {
      setLoading(true);
      setError(null);
      fetchCalendarData(username, year)
        .then(setData)
        .catch((err: unknown) => {
          if (err instanceof Error) {
            setError(err);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }, [username, year]);

    useEffect(fetchData, [fetchData]);

    // React error boundaries can't handle asynchronous code, so rethrow.
    if (error) {
      if (throwOnError) {
        throw error;
      } else {
        return <div>{errorMessage}</div>;
      }
    }

    if (loading || !data) {
      return <Skeleton {...props} loading />;
    }

    const theme = props.theme ?? gitHubTheme;

    const defaultLabels = {
      totalCount: `{{count}} contributions in ${year === "last" ? "the last year" : "{{year}}"}`,
    };

    const totalCount = year === "last" ? data.total.lastYear : data.total[year];

    return (
      <ActivityCalendar
        data={transformData(data.contributions, transformFn)}
        labels={Object.assign({}, defaultLabels, labels)}
        ref={ref}
        totalCount={transformFn && transformTotalCount ? undefined : totalCount}
        {...props}
        theme={theme}
        loading={Boolean(props.loading) || loading}
        maxLevel={4}
      />
    );
  },
);

GitHubCalendar.displayName = "GitHubCalendar";

const gitHubTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
} satisfies ThemeInput;

export default GitHubCalendar;
