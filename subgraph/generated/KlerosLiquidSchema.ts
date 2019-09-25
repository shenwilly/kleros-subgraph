// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NewPolicy extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NewPhase entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NewPhase entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NewPolicy", id.toString(), this);
  }

  static load(id: string): NewPolicy | null {
    return store.get("NewPolicy", id) as NewPolicy | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get phase(): i32 {
    let value = this.get("phase");
    return value.toI32();
  }

  set phase(value: i32) {
    this.set("phase", Value.fromI32(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class NewPeriod extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NewPeriod entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NewPeriod entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NewPeriod", id.toString(), this);
  }

  static load(id: string): NewPeriod | null {
    return store.get("NewPeriod", id) as NewPeriod | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get disputeID(): BigInt {
    let value = this.get("disputeID");
    return value.toBigInt();
  }

  set disputeID(value: BigInt) {
    this.set("disputeID", Value.fromBigInt(value));
  }

  get period(): i32 {
    let value = this.get("period");
    return value.toI32();
  }

  set period(value: i32) {
    this.set("period", Value.fromI32(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class StakeSet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakeSet entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakeSet entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakeSet", id.toString(), this);
  }

  static load(id: string): StakeSet | null {
    return store.get("StakeSet", id) as StakeSet | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get subcourtID(): BigInt {
    let value = this.get("subcourtID");
    return value.toBigInt();
  }

  set subcourtID(value: BigInt) {
    this.set("subcourtID", Value.fromBigInt(value));
  }

  get stake(): BigInt {
    let value = this.get("stake");
    return value.toBigInt();
  }

  set stake(value: BigInt) {
    this.set("stake", Value.fromBigInt(value));
  }

  get newTotalStake(): BigInt {
    let value = this.get("newTotalStake");
    return value.toBigInt();
  }

  set newTotalStake(value: BigInt) {
    this.set("newTotalStake", Value.fromBigInt(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class Draw extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Draw entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Draw entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Draw", id.toString(), this);
  }

  static load(id: string): Draw | null {
    return store.get("Draw", id) as Draw | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get disputeID(): BigInt {
    let value = this.get("disputeID");
    return value.toBigInt();
  }

  set disputeID(value: BigInt) {
    this.set("disputeID", Value.fromBigInt(value));
  }

  get appeal(): BigInt {
    let value = this.get("appeal");
    return value.toBigInt();
  }

  set appeal(value: BigInt) {
    this.set("appeal", Value.fromBigInt(value));
  }

  get voteID(): BigInt {
    let value = this.get("voteID");
    return value.toBigInt();
  }

  set voteID(value: BigInt) {
    this.set("voteID", Value.fromBigInt(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class TokenAndETHShift extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenAndETHShift entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenAndETHShift entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenAndETHShift", id.toString(), this);
  }

  static load(id: string): TokenAndETHShift | null {
    return store.get("TokenAndETHShift", id) as TokenAndETHShift | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get disputeID(): BigInt {
    let value = this.get("disputeID");
    return value.toBigInt();
  }

  set disputeID(value: BigInt) {
    this.set("disputeID", Value.fromBigInt(value));
  }

  get tokenAmount(): BigInt {
    let value = this.get("tokenAmount");
    return value.toBigInt();
  }

  set tokenAmount(value: BigInt) {
    this.set("tokenAmount", Value.fromBigInt(value));
  }

  get ETHAmount(): BigInt {
    let value = this.get("ETHAmount");
    return value.toBigInt();
  }

  set ETHAmount(value: BigInt) {
    this.set("ETHAmount", Value.fromBigInt(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class DisputeCreation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DisputeCreation entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DisputeCreation entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DisputeCreation", id.toString(), this);
  }

  static load(id: string): DisputeCreation | null {
    return store.get("DisputeCreation", id) as DisputeCreation | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get disputeID(): BigInt {
    let value = this.get("disputeID");
    return value.toBigInt();
  }

  set disputeID(value: BigInt) {
    this.set("disputeID", Value.fromBigInt(value));
  }

  get arbitrable(): Bytes {
    let value = this.get("arbitrable");
    return value.toBytes();
  }

  set arbitrable(value: Bytes) {
    this.set("arbitrable", Value.fromBytes(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class AppealPossible extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AppealPossible entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AppealPossible entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AppealPossible", id.toString(), this);
  }

  static load(id: string): AppealPossible | null {
    return store.get("AppealPossible", id) as AppealPossible | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get disputeID(): BigInt {
    let value = this.get("disputeID");
    return value.toBigInt();
  }

  set disputeID(value: BigInt) {
    this.set("disputeID", Value.fromBigInt(value));
  }

  get arbitrable(): Bytes {
    let value = this.get("arbitrable");
    return value.toBytes();
  }

  set arbitrable(value: Bytes) {
    this.set("arbitrable", Value.fromBytes(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class AppealDecision extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AppealDecision entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AppealDecision entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AppealDecision", id.toString(), this);
  }

  static load(id: string): AppealDecision | null {
    return store.get("AppealDecision", id) as AppealDecision | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get disputeID(): BigInt {
    let value = this.get("disputeID");
    return value.toBigInt();
  }

  set disputeID(value: BigInt) {
    this.set("disputeID", Value.fromBigInt(value));
  }

  get arbitrable(): Bytes {
    let value = this.get("arbitrable");
    return value.toBytes();
  }

  set arbitrable(value: Bytes) {
    this.set("arbitrable", Value.fromBytes(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class DisputeStatistic extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DisputeStatistic entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DisputeStatistic entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DisputeStatistic", id.toString(), this);
  }

  static load(id: string): DisputeStatistic | null {
    return store.get("DisputeStatistic", id) as DisputeStatistic | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalDisputes(): BigInt {
    let value = this.get("totalDisputes");
    return value.toBigInt();
  }

  set totalDisputes(value: BigInt) {
    this.set("totalDisputes", Value.fromBigInt(value));
  }

  get totalStakedAmount(): BigInt {
    let value = this.get("totalStakedAmount");
    return value.toBigInt();
  }

  set totalStakedAmount(value: BigInt) {
    this.set("totalStakedAmount", Value.fromBigInt(value));
  }
}

export class PeriodDisputeStatistic extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DisputeStatistic entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PeriodDisputeStatistic entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PeriodDisputeStatistic", id.toString(), this);
  }

  static load(id: string): PeriodDisputeStatistic | null {
    return store.get("PeriodDisputeStatistic", id) as PeriodDisputeStatistic | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get period(): i32 {
    let value = this.get("period");
    return value.toI32();
  }

  set period(value: i32) {
    this.set("period", Value.fromI32(value));
  }

  get totalDisputes(): BigInt {
    let value = this.get("totalDisputes");
    return value.toBigInt();
  }

  set totalDisputes(value: BigInt) {
    this.set("totalDisputes", Value.fromBigInt(value));
  }
}

export class JurorStakeAmount extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save JurorStakeAmount entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save JurorStakeAmount entity with non-string ID. " +
      'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("JurorStakeAmount", id.toString(), this);
  }

  static load(id: string): JurorStakeAmount | null {
    return store.get("JurorStakeAmount", id) as JurorStakeAmount | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get juror(): Bytes {
    let value = this.get("juror");
    return value.toBytes();
  }

  set juror(value: Bytes) {
    this.set("juror", Value.fromBytes(value));
  }

  get stakeAmount(): BigInt {
    let value = this.get("stakeAmount");
    return value.toBigInt();
  }

  set stakeAmount(value: BigInt) {
    this.set("stakeAmount", Value.fromBigInt(value));
  }
}
