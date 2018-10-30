import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';
import { BarChart, Cell, Bar, Tooltip } from 'recharts';
import MaterialIcon from 'material-icons-react';
import Paper from '@material-ui/core/Paper';


class CountryHistogram extends Component {
    constructor(props){
        super(props);
        this.state={
        }
        this.check = this.check.bind(this);
        this.tooltipYOffset = 55;
        this.tooltipZindex = 1000;
    }

    sendValueFromHistogram(e){
        let values = {
            value: e.ID, label: e.Country
        }
        this.props.valueFromCountryHistogram(values);
    }

    customTooltipOnYourLine(e){
        if (e.active && e.payload!=null && e.payload[0]!=null) {

          if(e.payload[0].payload["urbanPopulation"])
          {


              return (<div className="custom-tooltip">
                    Rank: {(e.label-50)*(-1)}
                    <p>{e.payload[0].payload["Country"]}</p>
                    {e.payload[0].payload["urbanPopulation"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                  </div>);
            }

            if(e.payload[0].payload["urbanizationLevel"])
            {


                return (<div className="custom-tooltip">
                      Rank: {(e.label-50)*(-1)}
                      <p>{e.payload[0].payload["Country"]}</p>
                      {Math.round(e.payload[0].payload["urbanizationLevel"]*100)+"%"}
                    </div>);
              }

              if(e.payload[0].payload["urbanAgglos"])
              {


                  return (<div className="custom-tooltip">
                        Rank: {(e.label-50)*(-1)}
                        <p>{e.payload[0].payload["Country"]}</p>
                        {e.payload[0].payload["urbanAgglos"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} agglos
                      </div>);
                }

                if(e.payload[0].payload["metropolitanPop"])
                {


                    return (<div className="custom-tooltip">
                          Rank: {(e.label-50)*(-1)}
                          <p>{e.payload[0].payload["Country"]}</p>
                          {Math.round(e.payload[0].payload["metropolitanPop"]*100)+"%"}
                        </div>);
                  }

                  if(e.payload[0].payload["AverageDist"])
                  {


                      return (<div className="custom-tooltip">
                            Rank: {(e.label-50)*(-1)}
                            <p>{e.payload[0].payload["Country"]}</p>
                            {Math.round(e.payload[0].payload["AverageDist"])+"km"}
                          </div>);
                    }

                    if(e.payload[0].payload["urbanSurface"])
                    {


                        return (<div className="custom-tooltip">
                              Rank: {(e.label-50)*(-1)}
                              <p>{e.payload[0].payload["Country"]}</p>
                              {Math.round(e.payload[0].payload["urbanSurface"]*10000)/100+"%"}
                            </div>);
                      }
          }
        else{}
      }

    renderUrbanPopulation(data, selectedCountry){
        return(
                <BarChart width={200} height={60} data={data}>
                    <Bar dataKey='urbanPopulationScaled' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                        {data.map((entry, index) => (
                            <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#c95d47' : '#e0e0e0' }/>
                        ))}
                    </Bar>
                    <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                </BarChart>
        )
    }

    renderUrbanizationLevel(data, selectedCountry){
        return(
            <BarChart width={200} height={60} data={data}>
                <Bar dataKey='urbanizationLevel' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#c95d47' : '#e0e0e0' }/>
                    ))}
                </Bar>
                <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
            </BarChart>
        )
    }

    renderAgglos(data, selectedCountry){
        return(
            <BarChart width={200} height={60} data={data}>
                <Bar dataKey='urbanAgglos' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#c95d47' : '#e0e0e0' }/>
                    ))}
                </Bar>
                <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
            </BarChart>
        )
    }

    renderMetropolitan(data, selectedCountry){
        return(
            <BarChart width={200} height={60} data={data}>
                <Bar dataKey='metropolitanPop' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#c95d47' : '#e0e0e0' }/>
                    ))}
                </Bar>
                <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
            </BarChart>
        )
    }

    renderAvgDist(data, selectedCountry){
        return(
            <BarChart width={200} height={60} data={data}>
                <Bar dataKey='AverageDistScaled' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#c95d47' : '#e0e0e0' }/>
                    ))}
                </Bar>
                <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
            </BarChart>
        )
    }

    renderUrbanSurf(data, selectedCountry){
        return(
            <BarChart width={200} height={60} data={data}>
                <Bar dataKey='urbanSurface' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                    {data.map((entry, index) => (
                        <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#c95d47' : '#e0e0e0' }/>
                    ))}
                </Bar>
              <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
            </BarChart>
        )
    }


    check(e){
        return(e === this.props.selectedCountry)
    }

    renderRanking(data){
        let d = data.map(u => u.ID)
        let rank = data.length - (d.findIndex(this.check) + 1)
        return(
            <p>Rank: <br/><span>{ rank + 1 }</span>/{data.length}</p>
        )
    }

    population(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{d.urbanPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
        )
    }

    urbanisationlevel(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{Math.round(d.urbanizationLevel*100)+'%'}</p>
        )
    }

    numofagglomeration(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{d.urbanAgglos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} agglos</p>
        )
    }

    metropolitan(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{Math.round(d.metropolitanPop*100)+'%'}</p>
        )
    }

    averagedist(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{Math.round(d.AverageDist)} km</p>
        )
    }

    urbanland(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <p>{Math.round(d.urbanSurface*10000)/100} %</p>
        )
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
        const dataUrbanPopulation = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "urbanPopulation":d.Upop,
                "urbanPopulationScaled":d.Upop_Scaled,
                "title": "Urban population",
                "info": "Total number of people living in urban agglomerations"
            }
        ))

        const dataUrbanizationLevel = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "urbanizationLevel": d.Ulvl_Scaled,
                "title": "Urbanisation level",
                "info": "Share of the urban population in total population"
            }
        ))

        const dataAgglomerations = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "urbanAgglos": d.NumAgglos,
                "urbanAgglosScaled": d.NumAgglos_Scaled,
                "title": "Number of agglomerations",
                "info": "Total number of urban agglomerations in country"
            }
        ))

        const dataMetropolitan = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "metropolitanPop": d.Mpop,
                "title": "Metropolitan population",
                "info": "Share of metropolitan population in total urban population"
            }
        ))

        const dataAverageDist = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "AverageDist": d.ADBC,
                "AverageDistScaled": d.ADBC_Scaled,
                "title": "Average distance between agglomerations",
                "info": "Average distance between urban agglomerations, calculated as average of distance between all pair of cities"
            }
        ))

        const dataUrbanSurf = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "urbanSurface": d.Usurf,
                "title": "Urban land cover",
                "info": "Share of total surface area covered by urban agglomerations"
            }
        ))

        const urbanPopulationData = dataUrbanPopulation.sort((a,b) => a.urbanPopulationScaled - b.urbanPopulationScaled);
        const urbanizationLevelData = dataUrbanizationLevel.sort((a,b) => a.urbanizationLevel - b.urbanizationLevel);
        const agglomerationData = dataAgglomerations.sort((a,b) => a.urbanAgglos - b.urbanAgglos);
        const metroPolitanData = dataMetropolitan.sort((a,b) => a.metropolitanPop - b.metropolitanPop);
        const averageDistData = dataAverageDist.sort((a,b) => a.AverageDistScaled - b.AverageDistScaled);
        const urbanSurfData = dataUrbanSurf.sort((a,b) => a.urbanSurface - b.urbanSurface);


        const { selectedCountry } = this.props;
        return(
            <Row className="no-padding">
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>{this.renderInfo(dataUrbanPopulation[0].info, dataUrbanPopulation[0].title)}</p></Col>
                            <Col md={3} className="country-histogram-value"> {this.population(urbanPopulationData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(urbanPopulationData)}</Col>
                            <Col md={4} className="country-histogram-wrapper"> {this.renderUrbanPopulation(urbanPopulationData, selectedCountry)} </Col>
                        </Row>
                    </Paper>
                </Col>
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>{this.renderInfo(dataUrbanizationLevel[0].info, dataUrbanizationLevel[0].title)}</p></Col>
                            <Col md={3} className="country-histogram-value"> {this.urbanisationlevel(urbanizationLevelData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(urbanizationLevelData)}</Col>
                            <Col md={4}className="country-histogram-wrapper">{this.renderUrbanizationLevel(urbanizationLevelData, selectedCountry)}</Col>
                        </Row>
                    </Paper>
                </Col>
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>{this.renderInfo(dataAgglomerations[0].info, dataAgglomerations[0].title)}</p></Col>
                            <Col md={3} className="country-histogram-value"> {this.numofagglomeration(agglomerationData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(agglomerationData)}</Col>
                            <Col md={4}className="country-histogram-wrapper">{this.renderAgglos(agglomerationData, selectedCountry)}</Col>
                        </Row>
                    </Paper>
                </Col>
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>{this.renderInfo(dataMetropolitan[0].info, dataMetropolitan[0].title)}</p></Col>
                            <Col md={3} className="country-histogram-value"> {this.metropolitan(metroPolitanData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(metroPolitanData)}</Col>
                            <Col md={4}className="country-histogram-wrapper">{this.renderMetropolitan(metroPolitanData, selectedCountry)}</Col>
                        </Row>
                    </Paper>
                </Col>
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>{this.renderInfo(dataAverageDist[0].info, dataAverageDist[0].title)}</p></Col>
                            <Col md={3} className="country-histogram-value"> {this.averagedist(averageDistData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(averageDistData)}</Col>
                            <Col md={4}className="country-histogram-wrapper">{this.renderAvgDist(averageDistData, selectedCountry)}</Col>
                        </Row>
                    </Paper>
                </Col>
                <Col md={12} className="histogram-wrapper">
                    <Paper square={true}>
                        <Row>
                            <Col md={4} className="keyfigureTitle"><p>{this.renderInfo(dataUrbanSurf[0].info, dataUrbanSurf[0].title)}</p></Col>
                            <Col md={3} className="country-histogram-value"> {this.urbanland(urbanSurfData, selectedCountry)}</Col>
                            <Col md={1} className="rankingWrapper">{this.renderRanking(urbanSurfData)}</Col>
                            <Col md={4}className="country-histogram-wrapper">{this.renderUrbanSurf(urbanSurfData, selectedCountry)}</Col>
                        </Row>
                    </Paper>
                </Col>
            </Row>
        );
    }
}

export default CountryHistogram;
