function tsToLiskTimestamp(date) {
  let timestampMilliseconds = new Date(date).getTime() - 1464109200000
  let timestampSeconds = timestampMilliseconds / 1000
  return Math.floor(timestampSeconds)
}

module.exports = {
  getStartOfYear: year => tsToLiskTimestamp(`${year}-01-01T00:00:00.000Z`),
  getEndOfYear: year => tsToLiskTimestamp(`${year}-12-31T23:59:59.999Z`)
}
