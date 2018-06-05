const lisk = require('lisk-js')
const BigNumber = require('bignumber.js')
const QueryStream = require('pg-query-stream')
const csv = require('fast-csv')

const { DateTime } = require('luxon')
const { send } = require('micro')
const { router, get } = require('microrouter')
const { Pool } = require('pg')

const config = require('./config')
const { transactionsQuery, blocksQuery } = require('./query')

const { getStartOfYear, getEndOfYear } = require('./helper')

const pool = new Pool(config)

const fromRawLsk = value =>
  new BigNumber(value || 0).dividedBy(new BigNumber(10).pow(8)).toFixed()

const convertTimestamp = (ts, zone) =>
  new DateTime.fromISO(new Date((1464109200 + ts) * 1000).toISOString())
    .setZone(zone)
    .toFormat('yyyy-MM-dd hh:mm:ss')

module.exports = router(
  get('/:address', async (req, res) => {
    const { address } = req.params
    const { delimiter = ';', year = 2018, timezone = 'UTC' } = req.query
    if (address.includes('favicon')) return ''

    res.setHeader('Content-Type', 'application/octet-stream')
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=lisk_txs_${address}_${year}.csv`
    )

    const query = new QueryStream(transactionsQuery, [
      address,
      getStartOfYear(year),
      getEndOfYear(year)
    ])
    const csvStream = csv.createWriteStream({
      headers: true,
      objectMode: true,
      delimiter,
      transform(row) {
        row.timestamp = convertTimestamp(row.timestamp, timezone)
        row.amount = fromRawLsk(row.amount)
        row.fee = fromRawLsk(row.fee)
        return row
      }
    })

    const client = await pool.connect()
    return client.query(query).pipe(csvStream)
  }),
  get('/delegate/:publicAddress', async (req, res) => {
    const { publicAddress } = req.params
    const { delimiter = ';', timezone = 'UTC' } = req.query
    if (publicAddress.includes('favicon')) return ''

    res.setHeader('Content-Type', 'application/octet-stream')
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=lisk_delegate_blocks.csv`
    )

    const query = new QueryStream(blocksQuery, [publicAddress])

    const csvStream = csv.createWriteStream({
      headers: true,
      objectMode: true,
      delimiter,
      transform(row) {
        row.timestamp = convertTimestamp(row.timestamp, timezone)
        row.totalfee = fromRawLsk(row.totalfee)
        row.reward = fromRawLsk(row.reward)
        return row
      }
    })

    const client = await pool.connect()
    return client.query(query).pipe(csvStream)
  })
)
