import React, {Component} from 'react';
import createClass from 'create-react-class';
import StepRangeSlider from 'react-step-range-slider'

class ExploreMixer extends Component {

    legend(data) {
        let Circle = createClass({
            render:function() {
                var circleStyle = {
                    opacity:0.6,
                    padding:4,
                    margin:0,
                    display:"inline-block",
                    backgroundColor: this.props.bgColor,
                    borderRadius: "50%",
                    width:this.props.size,
                    height:this.props.size,
                    };
                return (
                    <div style={circleStyle}></div>
                );
            }
        });

        let colors = ['#E73741','#df521e','#e1b400','#32a674','#0b68af','#993484'];
        let sizes = [24,21,18,15,12,9];
        let renderCircle = [];

        for (let i = 0; i < colors.length; i++) {
            let color = colors[i];
            let size = sizes[i];
            renderCircle.push(<Circle key={i + color} bgColor={color} size={size}/>);
        }

        let result = {};

        if(data){
            for(let i = 0; i < data.length; ++i) {
                if(!result[data[i]])
                result[data[i]] = 0;
                ++result[data[i]];
            }
            for(let i = 0; i < 7; ++i){
                if(!result[i]){result[i]=0}
            }
            result[["7"]]=result[["1"]]+result[["2"]]+result[["3"]]+result[["4"]]+result[["5"]]+result[["6"]];
        }

        return (
            <table className="explore-legend">
                <tbody>
                    <tr className="legend-category">
                        <th colSpan="2" >Size</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td className="legend-title">Above 2 million</td>
                        <td className="legend-diagram">{renderCircle[0]}</td>
                        <td className="legend-value">{result["6"]}</td>
                    </tr>
                    <tr>
                        <td>1 -2 million</td>
                        <td className="legend-diagram">{renderCircle[1]}</td>
                        <td className="legend-value">{result["5"]}</td>
                    </tr>
                    <tr>
                        <td>300 000 - 1 million</td>
                        <td className="legend-diagram">{renderCircle[2]}</td>
                        <td className="legend-value">{result["4"]}</td>
                    </tr>
                    <tr>
                        <td>100 000 - 300 000</td>
                        <td className="legend-diagram">{renderCircle[3]}</td>
                        <td className="legend-value">{result["3"]}</td>
                    </tr>
                    <tr>
                        <td>30 000 - 100 000</td>
                        <td className="legend-diagram">{renderCircle[4]}</td>
                        <td className="legend-value">{result["2"]}</td>
                    </tr>
                    <tr className="legend-category">
                        <td>10 000 - 30 000</td>
                        <td className="legend-diagram">{renderCircle[5]}</td>
                        <td className="legend-value">{result["1"]}</td>
                    </tr>
                    <tr className="legend-category">
                        <th colSpan="2" >Total Agglomerations</th>
                        <th>{result["7"]}</th>
                    </tr>
                </tbody>
            </table>
        )
    }

    render() {
        const renderLenged = this.legend(this.props.sizeArray); 
        return(
            <div className="explore_mixer-wrapper">
                <div className="explore_mixer-list">
                    <ul>
                        <li>
                            <h6> Timeslider </h6>
                            <p><span>{this.props.timeSliderValue}</span></p>
                            <StepRangeSlider
                                value={2015}
                                range={this.props.timeSliderRange}
                                onChange={value => this.props.handleSliderValue(value)}
                            />
                            <hr/>
                        </li>
                        <li>
                            <h6>Urban Population</h6>
                            <div className="legend-wrapper">{renderLenged}</div>
                        </li>

                    </ul>
                </div>
                <div className="home_mixer-download">
                        {/* {this._renderDownloadFullData()} */}
                        <img src="assets/images/swac-oecd.png" width="100%"
                        alt="Africapolis Visualise Urbanisation in Africa"/>
                </div>
            </div>
        );
    }
}
export default ExploreMixer;
