/* eslint-disable max-len */
import * as YouTubeTransformer from './YouTubeTransformer'

export const getHTML = (url: string): string => {
  if (YouTubeTransformer.shouldTransform(url)) {
    return YouTubeTransformer.getYouTubeIFrameHTML(url)
  } else {
    return ''
  }
}
