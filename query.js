module.exports = `SELECT
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
AND t_timestamp <= $3`
