import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

interface GoogleAnalyticProps {
  googleAnalyticId: string;
  googleTagManagerId: string;
}

export function GoogleAnalytic({ googleAnalyticId, googleTagManagerId }: GoogleAnalyticProps) {
  return (
    <>
      <GoogleAnalytics gaId={googleAnalyticId} />
      <GoogleTagManager gtmId={googleTagManagerId} />
    </>
  )
}
