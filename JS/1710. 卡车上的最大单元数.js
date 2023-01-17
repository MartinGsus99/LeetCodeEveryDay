/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

//箱子占用的空间是一样的，但是每个箱子的单元数量是不一样的。
//解法：优先拿单个箱子单元数量多的。

 var maximumUnits1 = function(boxTypes, truckSize) {

    //首先对数组进行排序
    //排序算法可以优化；
    for(let i=0;i<boxTypes.length;i++)
    {
        for(let j=0;j<boxTypes.length;j++)
        {
            if(boxTypes[i][1]>boxTypes[j][1])
            {
                let temp=[];
                temp=boxTypes[i];
                boxTypes[i]=boxTypes[j];
                boxTypes[j]=temp;
            }
        }
    }

    let sum=0;
    let usedTruckSize=0;
    let units=[];

    //将货物摆在地上
    for(let i=0;i<boxTypes.length;i++)
    {
        for(let j=0;j<boxTypes[i][0];j++){
            units.push(boxTypes[i][1]);
        }
    }

    console.log(units)
   
    for(let i=0;i<units.length;i++)
    {
        if(usedTruckSize>truckSize){
            return sum;
        }
        usedTruckSize=usedTruckSize+1;
        sum=sum+units[i];
        if(usedTruckSize==truckSize)
        {
            return sum;
        }
    }
    return sum;

};

var maximumUnits = function(boxTypes, truckSize) {

    for(let i=0;i<boxTypes.length;i++)
    {
        for(let j=0;j<boxTypes.length;j++)
        {
            if(boxTypes[i][1]>boxTypes[j][1])
            {
                let temp=[];
                temp=boxTypes[i];
                boxTypes[i]=boxTypes[j];
                boxTypes[j]=temp;
            }
        }
    }

    let sum=0;
    let units=[];

    //将货物摆在地上
    for(let i=0;i<boxTypes.length;i++)
    {
        for(let j=0;j<boxTypes[i][0];j++){
            units.push(boxTypes[i][1]);
        }
    }

    for(let i=0;i<units.length;i++)
    {
       if(truckSize<0){
        return sum;
       }
       sum=sum+units[i];
       truckSize--;
       if(truckSize==0)
       {
        return sum;
       }
    }
    return sum;

};

//官方解法
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let res = 0;
    for (const boxType of boxTypes) {
        let numberOfBoxes = boxType[0];
        let numberOfUnitsPerBox = boxType[1];
        if (numberOfBoxes < truckSize) {
            res += numberOfBoxes * numberOfUnitsPerBox;
            truckSize -= numberOfBoxes;
        } else {
            res += truckSize * numberOfUnitsPerBox;
            break;
        }
    }
    return res;
};

let boxTypes =[[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]];
let truckSize = 35;

console.log(maximumUnits(boxTypes,truckSize));