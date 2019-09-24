import {
  ClaimedTokens as ClaimedTokensEvent,
  Transfer as TransferEvent,
  NewCloneToken as NewCloneTokenEvent,
  Approval as ApprovalEvent
} from "../generated/Contract/MiniMeToken"
import {
  ClaimedTokens,
  Transfer,
  NewCloneToken,
  Approval
} from "../generated/MiniMeTokenSchema"

export function handleClaimedTokens(event: ClaimedTokensEvent): void {
  let entity = new ClaimedTokens(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._token = event.params._token
  entity._controller = event.params._controller
  entity._amount = event.params._amount
  entity._contractAddress = event.address
  entity._timestamp = event.block.timestamp
  entity._blockNumber = event.block.number
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._from = event.params._from
  entity._to = event.params._to
  entity._amount = event.params._amount
  entity._contractAddress = event.address
  entity._timestamp = event.block.timestamp
  entity._blockNumber = event.block.number
  entity.save()
}

export function handleNewCloneToken(event: NewCloneTokenEvent): void {
  let entity = new NewCloneToken(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._cloneToken = event.params._cloneToken
  entity._snapshotBlock = event.params._snapshotBlock
  entity._contractAddress = event.address
  entity._timestamp = event.block.timestamp
  entity._blockNumber = event.block.number
  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._owner = event.params._owner
  entity._spender = event.params._spender
  entity._amount = event.params._amount
  entity._contractAddress = event.address
  entity._timestamp = event.block.timestamp
  entity._blockNumber = event.block.number
  entity.save()
}