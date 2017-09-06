/**
 * Created by kexun on 17/9/4.
 */
import { Element } from "../../Element";

export class Wall extends Element {

  //类别
  category: string = 'WALL';


  //类型属性
  //Construction
  name: string = '常规墙--200mm';
  usage: string = 'Exterior/Interior';
  materials = {
    layers: [
      {
        type: 'INTERIOR',
        name: '瓷砖贴面',
        width: 20,
        //TODO 根据three.js的参数配置
        appearance: {
          view3D: {
            color: 0xffffff,
            sp: '23',
            map: 'texture'
          },
          surfacePatterns: {
            pat: '222',
            rotate: 0
          },
          cutPatterns: {
            pat: '222',
            rotate: 0
          }
        }

      }
    ]
  };

  //Identity Data
  typeTag: string = '';
  typeRemark: string = '';
  fireRating: string = '';
  manufacturer: string = '';
  Cost: string = '';

  //Analytical Properties
  heatTransferCoefficient: number = 12.000; //unit W/(m2*K)
  thernalResistance: number = 0.0769; //unit (m2*K)/W
  thernalMass: number = 12.33; //unit kJ/K
  absorptance: number = 0.7000;
  roughness: number = 3;

  //Derived Data
  width: number = 200;


  // 实例属性
  // constraints
  axisAlignment = 'WALL_Center/Interior_Face/Exterior_Face';
  baseConstraint = 'L1';
  baseOffset = 300;
  topConstraint = 'L2';
  topOffset = 0;
  roomBounding = true;

  //Structural
  structural = true;

  //Dimensions
  locationLine = {
    type: 'LINE/ARC',
    description1: {
      startPoint: [2, 34],
      endPoint: [45, 56],
      direction: [0.6, 0.3]
    },
    description2: {
      circle: {
        center: [9, 23],
        radius: 23
      },
      params: [34, 566]
    }
  };


//visibility
  visiableIn2D = true;

//Identity Data
  tag = '';
  remark = '';

//Phasing
  phaseCreated = '原有结构/墙体改造/硬装阶段/软装阶段';
  phaseDemolished = '';

//Derived Data
  area = 23333;
  volumn = 323456;
  height = 3600;
  length = 3990
}
