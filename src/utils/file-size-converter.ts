const KILOBYTES = 1024
const MEGABYTES = Math.pow(KILOBYTES, 2)

export const bytes_to_mb = (bytes: number) => bytes / MEGABYTES