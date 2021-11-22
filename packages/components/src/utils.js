/*
 * Sanitizes text for use in HTML (allowlisting)
 * Allows alphanumerical characters including æøå (0-9a-zæøåA-ZÆØÅ), dash, underscore and whitespace (\-\_\s).
 * Removes everything else.
 */
export function sanitizeStrict(text) {
  const blockList = /[^0-9a-zæøåA-ZÆØÅ\-\_\s]/g
  return text.replaceAll(blockList, '')
}
