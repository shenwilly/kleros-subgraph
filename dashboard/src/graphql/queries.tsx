import gql from 'graphql-tag'

export const DISPUTE_COUNT = gql`
  {
    disputeStatistics(first: 1){
      id
      totalDisputes
    }
  }`;

export const TOTAL_STAKE_AMOUNT = gql`
  {
    stakeSets{
      _newTotalStake
    }
  }`;

export const TOTAL_COURTS = gql`
  {
    policyUpdates(first: 1,orderBy: subcourtID, orderDirection: desc, where:{policy_not:""}){
      subcourtID
    }
  }
`;