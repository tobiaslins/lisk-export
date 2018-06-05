module.exports = {
  transactionsQuery: `SELECT
      "t_id" AS id,
      "b_height" AS height,
      "t_blockId" AS "blockId",
      "t_timestamp" AS timestamp,
      "t_senderId" AS "senderId",
      "t_recipientId" AS "recipientId",
      "t_amount" AS amount,
      "t_fee" AS fee,
      confirmations
  FROM
      trs_list
  WHERE ("t_senderId" = $1
      OR "t_recipientId" = $1)
  AND t_timestamp >= $2
  AND t_timestamp <= $3`,

  blocksQuery: `SELECT
  "b_height" AS height,
  "b_timestamp" AS timestamp,
  "b_totalFee" AS totalfee,
  "b_reward" AS reward
  from blocks_list where "b_generatorPublicKey" = $1;`
}
