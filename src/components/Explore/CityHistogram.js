import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';
import { BarChart, Cell, Bar, Tooltip, LineChart, Line, XAxis, CartesianGrid } from 'recharts';
import Paper from '@material-ui/core/Paper';
import MaterialIcon from 'material-icons-react';

let params = {
    histogramHeight: 100,
    histogramWidth: 200,
};

// class Custom extends Component {
//     render() {
//     const {cx, cy, selectedAgglos, stroke, payload, value} = this.props;
//         if(payload.ID){
//             return (
//                 <svg x={cx - 10} y={cy - 10} width={5} height={5} fill="green" viewBox="0 0 1024 1024">
//                     {/* <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z"/> */}
//                 </svg>
//                 );
//             }
//     }
//   }

class CityHistogram extends Component {
    constructor(props){
        super(props);
        this.state={
        }
        this.check = this.check.bind(this);

    }

    sendValueFromCityHistogram(e){
        this.props.valueFromCityHistogram(e);
    }

    customTooltipOnYourLine_city(e){
        if (e.active && e.payload!=null && e.payload[0]!=null) {
          if(e.payload[0].payload["Population"])
          {
              return (<div className="custom-tooltip">
                    <p>{e.payload[0].payload["City"]}</p>
                    {e.payload[0].payload["Population"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                  </div>);
            }

            if(e.payload[0].payload["Density"])
            {
                return (<div className="custom-tooltip">
                      <p>{e.payload[0].payload["City"]}</p>
                      {Math.round(e.payload[0].payload["Density"]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} inhabitants &frasl; km&sup2;
                    </div>);
              }

              if(e.payload[0].payload["Dist"])
              {


                  return (<div className="custom-tooltip">
                        <span>{e.payload[0].payload["City"]}</span>
                        <p>Closest Metro: {e.payload[0].payload["Closest_Metropolitan"]}</p>
                        {e.payload[0].payload["Dist"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km
                      </div>);
                }

                if(e.payload[0].payload["BuiltUp"])
                {


                    return (<div className="custom-tooltip">
                          <p>{e.payload[0].payload["City"]}</p>
                          {Math.round(e.payload[0].payload["BuiltUp"]*100)/100} km&sup2;
                        </div>);
                  }

                  if(e.payload[0].payload["Voronoi"])
                  {


                      return (<div className="custom-tooltip">
                            <p>{e.payload[0].payload["City"]}</p>
                            {Math.round(e.payload[0].payload["Voronoi"]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km&sup2;
                          </div>);
                    }


                      if(e.payload[0].payload["name"])
                      {


                          return (<div className="custom-tooltip">
                                <p>{e.payload[0].payload["City"]}</p>
                                Year {Math.round(e.payload[0].payload["name"])}
                                <p>{e.payload[0].payload["population"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>

                              </div>);
                        }
          }
        else{}
      }

    renderPopulation(data, selectedAgglos){
        return(
            <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                <Bar
                    dataKey='PopulationScaled'
                    height={10}
                    // startIndex={50}
                    travellerWidth={10}
                    stroke="lightgrey"/>
                <Bar dataKey='PopulationScaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#E8AE40' : 'lightgrey'}/>
                    ))}
                </Bar>
                <XAxis height={5}/>
                <Tooltip content={this.customTooltipOnYourLine_city} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
            </BarChart>
        )
    }

    renderDensity(data, selectedAgglos){
        return(
            <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                <Bar
                    dataKey='DensityScaled'
                    height={10}
                    // startIndex={50}
                    travellerWidth={10}
                    stroke="lightgrey"/>
                <Bar dataKey='DensityScaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#E8AE40' : 'lightgrey'}/>
                    ))}
                </Bar>
                <XAxis height={5}/>
                <Tooltip content={this.customTooltipOnYourLine_city} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
            </BarChart>
        )
    }

    renderDist(data, selectedAgglos){
        return(
            <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                <Bar
                    dataKey='DistScaled'
                    height={10}
                    // startIndex={50}
                    travellerWidth={10}
                    stroke="lightgrey"/>
                <Bar dataKey='DistScaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#E8AE40' : 'lightgrey'}/>
                    ))}
                </Bar>
                <XAxis height={5}/>
                <Tooltip content={this.customTooltipOnYourLine_city} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
            </BarChart>
        )
    }

    renderBuiltup(data, selectedAgglos){
        return(
            <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                <Bar
                    dataKey='BuiltUp'
                    height={10}
                    // startIndex={50}
                    travellerWidth={10}
                    stroke="lightgrey"/>
                <Bar dataKey='BuiltUp' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#E8AE40' : 'lightgrey'}/>
                    ))}
                </Bar>
                <XAxis height={5}/>
                <Tooltip content={this.customTooltipOnYourLine_city} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
            </BarChart>
        )
    }

    renderVoronoi(data, selectedAgglos){
        return(
            <BarChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                <Bar
                    dataKey='Voronoi_Scaled'
                    height={10}
                    // startIndex={50}
                    travellerWidth={10}
                    stroke="lightgrey"/>
                <Bar dataKey='Voronoi_Scaled' onClick={this.sendValueFromCityHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={data[index].ID === selectedAgglos ? '#E8AE40' : 'lightgrey'}/>
                    ))}
                </Bar>
                <XAxis height={5}/>
                <Tooltip content={this.customTooltipOnYourLine_city} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
            </BarChart>
        )
    }

    renderPopulation1950(data){
        return(
            <LineChart width={params.histogramWidth} height={params.histogramHeight} data={data}>
                <Line type="monotone" dataKey="population" stroke="#E8AE40" fill="#E8AE40"/>
                <CartesianGrid strokeDasharray="1 1"/>
                <Tooltip content={this.customTooltipOnYourLine_city} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
            </LineChart>
        )
    }


    check(e){
        return(e === this.props.selectedAgglos)
    }

    renderRanking(data){
        let d = data.map(u => u.ID)
        if(data[d.findIndex(this.check)]["Density"]===0||data[d.findIndex(this.check)]["Dist"]===0)
        {return(
            <div className="ranking">
                <p>Rank:<br/><span>-</span>/{data.length}</p>
            </div>)}
        else {


        let rank = data.length - (d.findIndex(this.check) + 1)
        return(
            <div className="ranking">
                <p>Rank:<br/><span>{ rank + 1 }</span>/{data.length}</p>
            </div>
        )
        }
    }

    population(data, value){
        let d = data.find(u => u.ID === value)
        if(value){
        return(
            <p>{d.Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
        )
        }else{return}
    }

    density(data, value){
        let d = data.find(u => u.ID === value)
        if(d.Density===0){
              return(<p> Population under <br/> 100 000  </p>)
    }
    else if(value)
    {return(<p>{Math.round(d.Density).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Inhabitants &frasl; km&sup2;</p>)
    }
    else{return}
    }

    distance(data,value){
        let d = data.find(u => u.ID === value)
        if(d.Dist===0){
              return(<p> Metrpolitan agglomeration </p>)
        }
        else if(value){
        return(
            <p>{d.Dist.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km</p>
        )
    }else{return}
    }

    builtup(data, value){
        let d = data.find(u => u.ID === value)
        if(value){
        return(
            <p>{d.BuiltUp} km&sup2;</p>
        )}
        else{return}
    }

    voronoi(data,value){
        let d = data.find(u => u.ID === value)
        if(value){
        return(
            <p>{d.Voronoi.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km&sup2;</p>
        )}else{
            return;
        }

    }

    filterAgglosForHistogram(data, selectedCountry){
        return data.filter(u => (u.ID === selectedCountry))
    }

    renderInfo(info, title){
        return(
            <div className="info-wrapper">{title}
            <MaterialIcon icon="info" size={15} className="icon-color"/>
                <span className="infotext"> {info} </span>
            </div>
        )
    }
    render() {

        const {
            selectedAgglos,
            agglosData,
            selectedCountry
        } = this.props;




        const agglos = this.filterAgglosForHistogram(agglosData, selectedCountry);



        const PopulationData = agglos.map((d) => (
            {
                "ID": d.City_ID,
                "City": d.cityName,
                "Population": d.Population,
                "PopulationScaled": d.Population_Scaled,
                "title": "Population",
                "info": "Number of inhabitants living in the agglomeration"
            }
        )).sort((a,b) => a.PopulationScaled - b.PopulationScaled);

        const DensityData = agglos.map((d) => (
            {
                "ID": d.City_ID,
                "City": d.cityName,
                "Density": d.Density,
                "DensityScaled": d.Density_Scaled,
                "title": "Density",
                "info": "Number of inhabitants per square kilometer in the agglomeration (Only above 100 000 inhabitants agglomeration is calculated)"
            }
        )).sort((a,b) => a.DensityScaled - b.DensityScaled);

        const DistData = agglos.map((d) => (
            {
                "ID": d.City_ID,
                "City": d.cityName,
                "Dist": Math.round(d.DistToMetro),
                "DistScaled": d.DistToMetro_Scaled,
                "Closest_Metropolitan": d.Closest_Metropolitan,
                "title": "Distance to metropolitan agglomeration",
                "info": "Distance to nearest metropolitan agglomeration in kilometre and name"
            }
        )).sort((a,b) => a.DistScaled - b.DistScaled);

        const BuiltupData = agglos.map((d) => (
            {
                "ID": d.City_ID,
                "City": d.cityName,
                "BuiltUp": d.Build_up,
                "BuiltUp_Scaled": d.Build_up_scale,
                "title": "Built-up area",
                "info": "Surface of built-up area in square kilometre"
            }
        )).sort((a,b) => a.BuiltUp - b.BuiltUp);

        const VoronoiData = agglos.map((d) => (
            {
                "ID": d.City_ID,
                "City": d.cityName,
                "Voronoi": d.Voronoi,
                "Voronoi_Scaled": d.Voronoi_Scaled,
                "title": "Size of Voronoi cell",
                "info": "Size of Voronoi cell in Square kilometre "
            }
        )).sort((a,b) => a.Voronoi_Scaled - b.Voronoi_Scaled);
        const pop1950 = agglos.filter(u => u.City_ID === selectedAgglos)
        const Pop1950Data = pop1950.map((d) => (
            {
            "ID": d.City_ID,
            "City": d.cityName,
            "data":[
                { ID: d.City_ID, City: d.cityName, name: "1950", "population": d.P1950, "title": "Population 1950-2015","info": "Historical population of agglomeration"},
                { ID: d.City_ID, City: d.cityName, name: "1960", "population": d.P1960 },
                { ID: d.City_ID, City: d.cityName, name: "1970", "population": d.P1970 },
                { ID: d.City_ID, City: d.cityName, name: "1980", "population": d.P1980 },
                { ID: d.City_ID, City: d.cityName, name: "1990", "population": d.P1990 },
                { ID: d.City_ID, City: d.cityName, name: "2000", "population": d.P2000 },
                { ID: d.City_ID, City: d.cityName, name: "2010", "population": d.P2010 },
                { ID: d.City_ID, City: d.cityName, name: "2015", "population": d.Population },
            ]
        }
        )).map(e => e.data);
        const data1950 = Pop1950Data.map(u => u.data);


        /*
        @@@LABELS:
        1. Population
        2. Density (people/km^2, threshold to see >100 000)
        3. Distance to metropolitan agglomeration (crossing country, name on hover tooltip )
        4. Built-up area
        5. Size of voronoi cell
        6. Population 1950-2015 (Growth rate 1950-2015 line graph with points)
        */

        if(selectedAgglos && PopulationData.find(u => u.ID === selectedAgglos)){
            return(
                <Row className="no-padding">
                    <Col md={12}>
                        <span>URBAN AGGLOMERATION</span>
                    </Col>
                    <br/><br/>
                    <Col md={12} className="histogram-wrapper">
                        <Paper square={true}>
                            <Row>
                                <Col md={4} className="agglosKeyFigureTitle"><p>{this.renderInfo(PopulationData[0].info, PopulationData[0].title)}</p></Col>
                                <Col md={3} className="country-histogram-value"> {this.population(PopulationData, selectedAgglos)}</Col>
                                <Col md={1} className="agglosRanking">{this.renderRanking(PopulationData)}</Col>
                                <Col md={4} className="country-histogram-wrapper"> {this.renderPopulation(PopulationData, selectedAgglos)} </Col>
                            </Row>
                        </Paper>
                    </Col>
                    <Col md={12} className="histogram-wrapper">
                        <Paper square={true}>
                            <Row>
                                <Col md={4} className="agglosKeyFigureTitle"><p>{this.renderInfo(DensityData[0].info, DensityData[0].title)}</p></Col>
                                <Col md={3} className="country-histogram-value"> {this.density(DensityData, selectedAgglos)}</Col>
                                <Col md={1} className="agglosRanking">{this.renderRanking(DensityData)}</Col>
                                <Col md={4} className="country-histogram-wrapper"> {this.renderDensity(DensityData, selectedAgglos)} </Col>
                            </Row>
                        </Paper>
                    </Col>
                    <Col md={12} className="histogram-wrapper">
                        <Paper square={true}>
                            <Row>
                                <Col md={4} className="agglosKeyFigureTitle"><p>{this.renderInfo(DistData[0].info, DistData[0].title)}</p></Col>
                                <Col md={3} className="country-histogram-value"> {this.distance(DistData, selectedAgglos)}</Col>
                                <Col md={1} className="agglosRanking">{this.renderRanking(DistData)}</Col>
                                <Col md={4} className="country-histogram-wrapper"> {this.renderDist(DistData, selectedAgglos)} </Col>
                            </Row>
                        </Paper>
                    </Col>
                    <Col md={12} className="histogram-wrapper">
                        <Paper square={true}>
                            <Row>
                                <Col md={4} className="agglosKeyFigureTitle"><p>{this.renderInfo(BuiltupData[0].info, BuiltupData[0].title)}</p></Col>
                                <Col md={3} className="country-histogram-value"> {this.builtup(BuiltupData, selectedAgglos)}</Col>
                                <Col md={1} className="agglosRanking">{this.renderRanking(BuiltupData)}</Col>
                                <Col md={4} className="country-histogram-wrapper"> {this.renderBuiltup(BuiltupData, selectedAgglos)} </Col>
                            </Row>
                        </Paper>
                    </Col>
                    <Col md={12} className="histogram-wrapper">
                        <Paper square={true}>
                            <Row>
                                <Col md={4} className="agglosKeyFigureTitle"><p>{this.renderInfo(VoronoiData[0].info, VoronoiData[0].title)}</p></Col>
                                <Col md={3} className="country-histogram-value"> {this.voronoi(VoronoiData, selectedAgglos)}</Col>
                                <Col md={1} className="agglosRanking">{this.renderRanking(VoronoiData)}</Col>
                                <Col md={4} className="country-histogram-wrapper"> {this.renderVoronoi(VoronoiData, selectedAgglos)} </Col>
                            </Row>
                        </Paper>
                    </Col>
                    <Col md={12} className="histogram-wrapper">
                        <Paper square={true}>
                            <Row>
                                <Col md={4} className="agglosKeyFigureTitle"><p>{this.renderInfo(Pop1950Data[0][0].info, Pop1950Data[0][0].title)}</p></Col>
                                <Col md={3} className="country-histogram-value"></Col>
                                <Col md={1} className="agglosRanking"></Col>
                                <Col md={4} className="country-histogram-wrapper"> {this.renderPopulation1950(Pop1950Data[0])} </Col>
                            </Row>
                        </Paper>
                    </Col>
                </Row>
            );
        }else{
            return <div></div>
        }
    }
}

export default CityHistogram;
