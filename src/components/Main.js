require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imageDatas = require('../data/imgData');

// console.log(imageDatas)
//获取imageDates.json 的图片信息并且存储在imageDates 数组中；
function getImageURL(imageDataArr){
    for(var i =0,j =imageDataArr.length;i<j;i++){
        var singleImageData = imageDataArr[i];
        singleImageData.imageURL = require('../images/'+singleImageData.fileName);

        imageDataArr[i] = singleImageData;
    }
    return imageDataArr;
}

imageDatas = getImageURL(imageDatas);




//图片组件

class ImgFigure  extends React.Component{
  render(){
    return (
      <figure className="img-figure">
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">
            {this.props.data.title}
          </h2>
        </figcaption>
      </figure>
      )
  }
}



class AppComponent extends React.Component {
  constructor(props) {
      super(props);

      this.Constant = { //常量的key ？
        centerPos: {
          left: 0,
          right: 0
        },
        hPosRange: { //水平方向取值范围
          leftSecX: [0, 0],
          rightSecX: [0, 0],
          y: [0, 0]
        },
        vPosRange: { //垂直方向取值范围
          x: [0, 0],
          topY: [0, 0]
        }
      }
    }




//组件加载后为每张图的位置
  componentDidMount(){
    var stageDOM = this.refs.stage,
    stageW = stageDOM.scrollWidth ,
    stageH = stageDOM.scrollHeight,
    halfStageW = Math.ceil(stageW / 2),
    halfStageH =Math.ceil(stageH/2);
  //  scrollWidth: 对象实际内容的宽度，不包含滚动条等，撑开会变大
  //clientWidth : 对象内容的可视化宽度，不包含滚动条，会随着显示大小改变
  // offsetWidth：对象整体的实际宽度，包滚动条等边线，会随对象显示大小的变化而改变


  // imageFigure 大小

  var imageFigureDOM = this.refs.imageFigure,
  imgW = imageFigureDOM.scrollWidth,
  imgW = imageFigureDOM.scrollHeight,

   halfImgW = Math.ceil(imgW / 2),
    halfImgH =Math.ceil(imgW/2);
  //计算图片中心的位置
  this.Constant.centerPos ={
    left:halfStageW - halfImgW,
    toop:halfStageH -halfImgH
  }
//计算图片排布位置
  this.Constant.hPosRange.leftSecx[0] = -halfImgW;
  this.Constant.hPosRange.leftSecx[1] = halfStageW- halfImgW*3;

  this.Constant.hPosRange.rightSecx[0] = halfStageW = halfImgW;
  this.Constant.hPosRange.rightSecx[1] =stageW- halfImgW;
  this.Constant.hPosRange.y[0]= -halfImgH;
  this.Constant.hPosRange.y[1] = stageH-halfImgH;

  this.Constant.vPosRange.topY[0] = -halfImgH;
  this.Constant.vPosRange.topY[1] = halfStageH - halfImgH*3;
  this.Constant.vPosRange.x[0] = halfImgW-imgW;
  this.Constant.vPosRange.x[1] = halfImgW;


  }


  render() {
  const controllerunits = [],
  imgFigures = [];

  imageDatas.forEach(function(value,index){
    console.log("1")
    imgFigures.push(<ImgFigure data={value} key={value.fileName} ref={`imageFigure`}/>)
  })


    return (
      <div className="index">
        {/*<img src={yeomanImage} alt="Yeoman Generator" />*/}
        <section className="stage" ref="stage">
          <section className="img-sec">
            {imgFigures}
          </section>
          <nav className="controller-nav">
            {controllerunits}
          </nav>
        </section>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
