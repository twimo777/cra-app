import React from "react";


const Txt = (props) => {
    return(
        <>
        {props.txt}
        </>
    );

}



const H3 = () => {
    return(
        <h3>
            <Txt txt ={' 작지만 강해~ 후회없는 선택 미니건조기'} />
            <Txt txt ={' 시원 담백한 육수에 쫄깃한 면발'} />
            <Txt txt ={' 치킨계의 원탑 맘스터치 1+1'} />
        </h3>
    );
}



const Title = () => {
    return(
       <div className="title">
        <H3 />

       </div> 
    );

} 

export default Title;