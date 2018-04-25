import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';

class Chart extends Component{

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  componentWillMount() {
    this.getChartDataNum();
  }

  getChartDataNum(){

    this.setState({
      chartData:{
        labels: ['Yes', 'No', 'Undecided',],
        datasets:[
          {
            label:'Votes',
            data:[
            this.props.votes_yes.length,
            this.props.votes_no.length,
            this.props.votes_undecided.length
            ],
            backgroundColor:[
              'rgba(0, 123, 255, 1)',
              'rgba(251, 34, 89, 1)',
              'rgba(255, 240, 200, 1)'
            ]
          },
        ]
      }
    });
  }

  render(){
    return (
      <div>
        {
          ((this.props.votes_yes.length + this.props.votes_no.length + this.props.votes_undecided.length > 0)) ?
            (<div className="voteOverview">
              <div className="chart">
                <Doughnut
                  data={this.state.chartData}
                  options={{
                    title:{
                      display:this.props.displayTitle,
                      text:this.props.location,
                      fontSize:25
                    },
                    legend:{
                      display:this.props.displayLegend,
                      position:this.props.legendPosition
                    }
                  }}
                />
              </div>
            </div>)
        : 
          (<p>No Votes Yet :(</p>)
      }
      </div>

    )
  }
}

export default Chart;