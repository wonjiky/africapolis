import createClass from 'create-react-class';
import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import MaterialIcon from 'material-icons-react';
// import InputRange from 'react-input-range';
import StepRangeSlider from 'react-step-range-slider'
// import Button from '@material-ui/core/Button';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';


class RenderFilter extends Component {


    constructor(props){
        super(props);
        this.state={
            value: 2015,
        }
    }

    _renderDownloadFullData(){
        return(
            <div>
            <MaterialIcon icon="add_circle_outline" size={25} color='#585858' />
            <p>Annual Report 2018</p>
            </div>
        )
    }

    steps(e){
        console.log(this.state.value);
        const {value} = this.state;
        if(1950 < value < 2010){
            return 10;
        }else if (value > 2010){
            return 5;
        }
    }



    hello(data){
      let Circle = createClass({
        render:function(){
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
            <div style={circleStyle}>
            </div>
          );
        }
      });
      let colors = ['#E73741','#df521e','#e1b400','#32a674','#0b68af','#993484'];
      let sizes = [24,21,18,15,12,9];
      let renderData = [];

      for (var i = 0; i < colors.length; i++) {
        var color = colors[i];
        var size = sizes[i];
        renderData.push(<Circle key={i + color} bgColor={color} size={size}/>);
      }
      let destination = document.querySelector("#container");





      let result = {};
      if(data){
      for(var i = 0; i < data.length; ++i) {
          if(!result[data[i]])
              result[data[i]] = 0;
          ++result[data[i]];




      }
      for(var i = 0; i < 7; ++i)
      {if(!result[i])
        {result[i]=0}

      }
      result[["7"]]=data.length;

}
      return (
        <li className="slider">
        <Row>
            <Col className="legend-number">
                <p>&nbsp;&nbsp;&nbsp;Above 2 million</p>
                <p> &nbsp;&nbsp;&nbsp;1 - 2 million</p>
                <p> &nbsp;&nbsp;&nbsp;300 000 - 1 million</p>
                <p> &nbsp;&nbsp;&nbsp;100 000 -  300 000</p>
                <p> &nbsp;&nbsp;&nbsp;30 000 - 100 000</p>
                <p> &nbsp;&nbsp;&nbsp;10 000 - 30 000</p>
                <li className="slider-title"><p> &nbsp;&nbsp;&nbsp;Total</p></li>
            </Col>
        <Col className='legend-circle'>
          <p>{renderData[0]}</p>
          <p>{renderData[1]}</p>
          <p>{renderData[2]}</p>
          <p>{renderData[3]}</p>
          <p>{renderData[4]}</p>
          <p>{renderData[5]}</p>

        </Col>
        <Col className="legend-circle">
        <p> &nbsp;{result["6"]}</p>
        <p> &nbsp;{result["5"]}</p>
        <p> &nbsp;{result["4"]}</p>
        <p> &nbsp;{result["3"]}</p>
        <p> &nbsp;{result["2"]}</p>
        <p> &nbsp;{result["1"]}</p>
        <li className="slider-title"><p> &nbsp;{result["7"]}</p></li>
        </Col>

        </Row>

        </li>
      );
    }




    render() {


        const range = [
            { value: 1950, step: 10 },
            { value: 1960, step: 10 },
            { value: 1970, step: 10 },
            { value: 1980, step: 10 },
            { value: 1990, step: 10 },
            { value: 2000, step: 10 },
            { value: 2010, step: 5 },
            { value: 2015 }
        ]
        const hi= this.hello(this.props.sizeArray)

        return(
            <Grid fluid id="mixer">
                <Col md={12} className="explore-mixer-list">
                    <ul className="list-unstyled">
                        <li className="slider-title">Timeslider</li>
                        <li className="slider">Use slider to toggle view of<br/> different years</li>
                        <br/>
                        <li>
                            <StepRangeSlider
                            value={2015}
                            range={range}
                            onChange={value => console.log(value)}
                            />
                        </li>
                        <hr className="mixerhr" />
                        <li className="slider-title">Urban population</li>




                                {hi}



                        <hr className="mixerhr" />
                    </ul>
                </Col>

                <Col md={12} className="mixer-download">


                    <hr/>
                        {this._renderDownloadFullData()}
                    <hr/>
                    <img src="africapolis/assets/images/swac-oecd.png" width="100%"
                    alt="Africapolis Visualise Urbanisation in Africa"/>


                </Col>
            </Grid>
        );
    }

}

export default RenderFilter;
