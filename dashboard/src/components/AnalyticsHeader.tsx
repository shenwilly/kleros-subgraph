import * as React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import {Query} from 'react-apollo'
import {
  DISPUTE_COUNT,
  REWARD_AND_PUNISHMENT,
  TOTAL_COURTS
} from "../graphql/queries";
import Web3 from 'web3';

interface Props {
}

interface State {

}

interface DisputeData {
  disputeStatistics: Array<{
    id: string;
    totalDisputes: string;
  }>
}

interface CourtData {
  policyUpdates: Array<{
    subcourtID: string;
  }>
}

interface RewardData {
  rewardStatistics: Array<{
    totalRewardedTokenAmount: string;
    totalRewardedEthAmount: string;
    totalPunishedTokenAmount: string;
  }>
}

interface Variable {

}

export default class AnalyticsHeader extends React.Component<Props, State> {


  constructor(props: Readonly<Props>) {
    super(props);
  }


  render() {

    return <Card>
      <Card.Body>
        <Row style={{
          borderBottom: "1px",
          borderBottomStyle: "solid",
          borderColor: "#e7eaf3",
          marginTop: ".75rem",
          marginBottom: ".75rem",
          padding:"5px"
        }}>
          <Col>
            <strong>Total Disputes:</strong> <Badge variant="secondary">

            <Query<DisputeData, Variable> query={DISPUTE_COUNT}>
              {({loading, error, data}) => {
                if (loading) return <span>{'Loading...'}</span>;
                if (error) return <span>{`Error! ${error.message}`}</span>;

                return <span>{data.disputeStatistics[0].totalDisputes}</span>;
              }}
            </Query>
          </Badge>
          </Col>
          <Col>
            <strong>Total active courts:</strong> <Badge variant="secondary">
            <Query<CourtData, Variable> query={TOTAL_COURTS}>
              {({loading, error, data}) => {
                if (loading) return <span>{'Loading...'}</span>;
                if (error) return <span>{`Error! ${error.message}`}</span>;

                return <span>{parseInt(data.policyUpdates[0].subcourtID) + 1}</span>;
              }}
            </Query>

          </Badge>
          </Col>
          <Col>
            <strong>Total Staked Amount:</strong> <Badge variant="secondary">
            700PNK</Badge>

          </Col>
        </Row>

        <Query<RewardData, Variable> query={REWARD_AND_PUNISHMENT}>
          {({loading, error, data}) => {
            if (loading) return <span>{'Loading...'}</span>;
            if (error) return <span>{`Error! ${error.message}`}</span>;

            return <Row style={{
              borderBottom: "1px",
              borderBottomStyle: "solid",
              borderColor: "#e7eaf3",
              marginTop: ".75rem",
              marginBottom: ".75rem",
              padding: "5px"
            }}>

              <Col>
                <strong>Total Earning(eth):</strong> <Badge
                variant="secondary">
                {
                  parseFloat(Web3.utils.fromWei(
                    data.rewardStatistics[0].totalRewardedEthAmount,
                    'ether'
                  )).toFixed(3)
                }
              </Badge>
              </Col>
              <Col>
                <strong>Total Earning(PNK):</strong> <Badge
                variant="secondary">
                {
                  parseFloat(Web3.utils.fromWei(
                    data.rewardStatistics[0].totalRewardedTokenAmount,
                    'ether'
                  )).toFixed(3)
                }

              </Badge>
              </Col>
              <Col>
                <strong>Total Penalty(PNK):</strong> <Badge
                variant="secondary">
                {
                  parseFloat(Web3.utils.fromWei(data.rewardStatistics[0].totalPunishedTokenAmount.substr(1),
                    'ether'
                  )).toFixed(3)
                }
              </Badge>

              </Col>
            </Row>;
          }}
        </Query>

      </Card.Body>
    </Card>
  }
}
