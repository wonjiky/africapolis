import React, { Component } from 'react';
import { BarChart, Cell, Bar, Tooltip } from 'recharts';
import MaterialIcon from 'material-icons-react';

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
            <div className="country-histogram-wrapper">
                <BarChart width={200} height={60} data={data}>
                    <Bar dataKey='urbanPopulationScaled' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                        {data.map((entry, index) => (
                            <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                        ))}
                    </Bar>
                    <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                </BarChart>
            </div>
        )
    }

    renderUrbanizationLevel(data, selectedCountry){
        return(
            <div className="country-histogram-wrapper">
                <BarChart width={200} height={60} data={data}>
                    <Bar dataKey='urbanizationLevel' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                        {data.map((entry, index) => (
                            <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                        ))}
                    </Bar>
                    <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                </BarChart>
            </div>
        )
    }

    renderAgglos(data, selectedCountry){
        return(
            <div className="country-histogram-wrapper">
                <BarChart width={200} height={60} data={data}>
                    <Bar dataKey='urbanAgglos' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                        {data.map((entry, index) => (
                            <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                        ))}
                    </Bar>
                    <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                </BarChart>
            </div>
        )
    }

    renderMetropolitan(data, selectedCountry){
        return(
            <div className="country-histogram-wrapper">
                <BarChart width={200} height={60} data={data}>
                    <Bar dataKey='metropolitanPop' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                        {data.map((entry, index) => (
                            <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                        ))}
                    </Bar>
                    <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                </BarChart>
            </div>
        )
    }

    renderAvgDist(data, selectedCountry){
        return(
            <div className="country-histogram-wrapper">
                <BarChart width={200} height={60} data={data}>
                    <Bar dataKey='AverageDistScaled' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                        {data.map((entry, index) => (
                            <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                        ))}
                    </Bar>
                    <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                </BarChart>
            </div>
        )
    }

    renderUrbanSurf(data, selectedCountry){
        return(
            <div className="country-histogram-wrapper">
                <BarChart width={200} height={60} data={data}>
                    <Bar dataKey='urbanSurface' onClick={this.sendValueFromHistogram.bind(this)} id="color">
                        {data.map((entry, index) => (
                            <Cell cursor="pointer" key={`cell-${index}`} fill={entry.ID ===  selectedCountry ? '#e8ae40' : '#e0e0e0' }/>
                        ))}
                    </Bar>
                <Tooltip content={this.customTooltipOnYourLine} position={{y: this.tooltipYOffset}} wrapperStyle={{zIndex: this.tooltipZindex}}/>
                </BarChart>
            </div>
        )
    }


    check(e){
        return(e === this.props.selectedCountry)
    }

    renderRanking(data){
        let d = data.map(u => u.ID)
        let rank = data.length - (d.findIndex(this.check) + 1)
        return(
            <div className="histogram-ranking">
                <p>Rank: <br/><span>{ rank + 1 }</span>/{data.length}</p>
            </div>
        )
    }

    population(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{d.urbanPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            </div>
        )
    }

    urbanisationlevel(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{Math.round(d.urbanizationLevel*100)+'%'}</p>
            </div>
        )
    }

    numofagglomeration(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{d.urbanAgglos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            </div>
        )
    }

    metropolitan(data, value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{Math.round(d.metropolitanPop*100)+'%'}</p>
            </div>
        )
    }

    averagedist(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{Math.round(d.AverageDist)}km</p>
            </div>
        )
    }

    urbanland(data,value){
        let d = data.find(u => u.ID === value)
        return(
            <div className="histogram-value">
                <p>{Math.round(d.urbanSurface*10000)/100}%</p>
            </div>
        )
    }

    renderInfo(info, title){
        return(
            <div className="histogram-title">
                {title}
                <MaterialIcon icon="info" size={15} className="icon-color"/>
                <p className="infotext"> {info} </p>
            </div>
        )
    }

    render() {
        // console.log(this.props.timeSliderValue);
        let value = this.props.timeSliderValue;
        //@@ Change value to sliderValue;
        // let value = 2015;
        if (this.props.countryData) {
            for (var j = 0; j < 5; ++j){
                let variables = ["Upop","NumAgglos","ADBC","Mpop","Ulvl_Scaled"]
                for(var i = 0; i < 50; ++i) {
                    if(this.props.countryData[i][variables[j]+"_sel"]) {
                        delete this.props.countryData[i][variables[j]+"_sel"];
                    }
                    Object.defineProperty(this.props.countryData[i], variables[j]+"_sel",
                    Object.getOwnPropertyDescriptor(this.props.countryData[i], variables[j] + value));
                }
            }
        }
        const dataUrbanPopulation = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "urbanPopulation":d.Upop_sel,
                "urbanPopulationScaled":d.Upop_sel,
                "title": "Urban population",
                "info": "Total number of people living in urban agglomerations"
            }
        ))

        const dataUrbanizationLevel = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "urbanizationLevel": d.Ulvl_Scaled_sel,
                "title": "Urbanisation level",
                "info": "Share of the urban population in total population"
            }
        ))

        const dataAgglomerations = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "urbanAgglos": d.NumAgglos_sel,
                "urbanAgglosScaled": d.NumAgglos_sel,
                "title": "Number of agglomerations",
                "info": "Total number of urban agglomerations in country"
            }
        ))

        const dataMetropolitan = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "metropolitanPop": d.Mpop_sel,
                "title": "Metropolitan population",
                "info": "Share of metropolitan population in total urban population"
            }
        ))

        const dataAverageDist = this.props.countryData.map((d, i) => (
            {
                "ID":d.ID,
                "ISO":d.ISO,
                "Country": d.Country,
                "AverageDist": d.ADBC_sel,
                "AverageDistScaled": d.ADBC_sel,
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
            <div className="histogram_country-wrapper">
                <div className="indicator-wrapper">
                    {this.renderInfo(dataUrbanPopulation[0].info, dataUrbanPopulation[0].title)}
                    {this.population(urbanPopulationData, selectedCountry)}
                    {this.renderRanking(urbanPopulationData)}
                    {this.renderUrbanPopulation(urbanPopulationData, selectedCountry)}
                </div>
                <div className="indicator-wrapper">
                    {this.renderInfo(dataUrbanizationLevel[0].info, dataUrbanizationLevel[0].title)}
                    {this.urbanisationlevel(urbanizationLevelData, selectedCountry)}
                    {this.renderRanking(urbanizationLevelData)}
                    {this.renderUrbanizationLevel(urbanizationLevelData, selectedCountry)}
                </div>
                <div className="indicator-wrapper">
                    {this.renderInfo(dataAgglomerations[0].info, dataAgglomerations[0].title)}
                    {this.numofagglomeration(agglomerationData, selectedCountry)}
                    {this.renderRanking(agglomerationData)}
                    {this.renderAgglos(agglomerationData, selectedCountry)}
                </div>
                <div className="indicator-wrapper">
                    {this.renderInfo(dataMetropolitan[0].info, dataMetropolitan[0].title)}
                    {this.metropolitan(metroPolitanData, selectedCountry)}
                    {this.renderRanking(metroPolitanData)}
                    {this.renderMetropolitan(metroPolitanData, selectedCountry)}
                </div>
                <div className="indicator-wrapper">
                    {this.renderInfo(dataAverageDist[0].info, dataAverageDist[0].title)}
                    {this.averagedist(averageDistData, selectedCountry)}
                    {this.renderRanking(averageDistData)}
                    {this.renderAvgDist(averageDistData, selectedCountry)}
                </div>
                <div className="indicator-wrapper">
                    {this.renderInfo(dataUrbanSurf[0].info, dataUrbanSurf[0].title)}
                    {this.urbanland(urbanSurfData, selectedCountry)}
                    {this.renderRanking(urbanSurfData)}
                    {this.renderUrbanSurf(urbanSurfData, selectedCountry)}
                </div>
            </div>
        );
    }
}

export default CountryHistogram;
