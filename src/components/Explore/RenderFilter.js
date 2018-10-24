import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import MaterialIcon from 'material-icons-react';
// import InputRange from 'react-input-range';
import StepRangeSlider from 'react-step-range-slider'
// import Button from '@material-ui/core/Button';
// import ChevronRight from '@material-ui/icons/ChevronRight';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';


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
      let result = {};
      if(data){
      for(var i = 0; i < data.length; ++i) {
          if(!result[data[i]])
              result[data[i]] = 0;
          ++result[data[i]];
      }
}
      return (
        <div>
          {result["6"]}<br/>
          {result["5"]}<br/>
          {result["4"]}<br/>
          {result["3"]}<br/>
          {result["2"]}<br/>
          {result["1"]}<br/>

        </div>
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
                        <li className="slider-title">Population</li>
                        <li>
                            <Row>
                                <Col className="legend-number">
                                    <p>Above 2 million</p>
                                    <p>1-2 million</p>
                                    <p>300 000 - 1 million</p>
                                    <p>100 000 -  300 000</p>
                                    <p>30 000 - 100 000</p>
                                    <p>10 000 - 30 000</p>
                                </Col>
                                <Col className="legend">

                                <img src="assets/images/legend_image.png" height="80%"
                                    alt="Africapolis Visualise Urbanisation in Africa"/>
                                </Col>
                                <Col>
                                {hi}
                                </Col>
                            </Row>
                            {/* <div>
                                <p>Above 2million</p>
                            </div>
                            <div className="legend">
                                <img src="assets/images/legend_image.png" height="100%"
                            alt="Africapolis Visualise Urbanisation in Africa"/>
                            {hi}
                        </div> */}
                        </li>
                        <hr className="mixerhr" />
                    </ul>
                </Col>
                <Col md={12} className="mixer-download">

                    <hr/>
                        {this._renderDownloadFullData()}
                    <hr/>
                    <img src="assets/images/swac-oecd.png" width="100%"
                    alt="Africapolis Visualise Urbanisation in Africa"/>


                </Col>
            </Grid>
        );
    }

}

export default RenderFilter;
