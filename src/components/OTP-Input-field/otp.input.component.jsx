import { useEffect, useRef, useState } from "react";
import { Container, InputBox } from "../otp.input.style";
const InputBoxContainer=()=>{
    const [otpfields, setOtpfields]=useState(new Array(6).fill(""));
    const inputBoxRef=useRef([]);
    useEffect(()=>inputBoxRef.current[0].focus(),[]);
    const handlekeydown=(e,index)=>{
        const key=e.key;
        const copyOtpArray=[...otpfields];
        if(key==="Backspace"){
            copyOtpArray[index]="";
            setOtpfields(copyOtpArray);
            if(index>0) inputBoxRef.current[index-1].focus();
            return;
        }
        if(key==="ArrowRight") if(index<5) inputBoxRef.current[index+1].focus();
        if(key==="ArrowLeft") if(index>0) inputBoxRef.current[index-1].focus();
        if(isNaN(key)) return;
        copyOtpArray[index]=key;
        setOtpfields(copyOtpArray);
        if(index<5) inputBoxRef.current[index+1].focus();
    }
    
    
    return(
        <Container>
            {otpfields.map((item,index)=><InputBox ref={(currentNode)=>inputBoxRef.current[index]=currentNode} key={index} type="text" value={item} onKeyDown={(e)=>handlekeydown(e,index)}/>)}
        </Container>
    )
}
//currentNode is internally provided by the react in the callback function
export default InputBoxContainer;