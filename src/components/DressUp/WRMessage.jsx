import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import { Input, ShortButton, Container} from "../../styles/globalStyle";
import {useRecoilState} from 'recoil'
import axios from 'axios'
import {baseEyes, baseArms, baseHead, baseNose, baseItem, baseMouth} from '../../utils/dressRecoil'
import { useNavigate } from 'react-router-dom';


const WRMessage = () => {
    const navigate=useNavigate();
    const createrRef=useRef(null)
    const messageRef=useRef(null)
    const [messageContents, setMessageContents] = useState({letter:'', creater:''});
    const [saveFirst, setSaveFirst] = useState(false);
    const [saveComp, setSaveComp] = useState(false);
    const isClickedSaveBt = () =>{
        setSaveFirst(!saveFirst);
    }
    const isCompSaved = () =>{
        setSaveComp(!saveComp)
        setSaveFirst(false);

    }

    const [invitationCode, setInvitationCode] = useState('')
    const [eye, setEyes] = useRecoilState(baseEyes);
    const [nose, setNose] = useRecoilState(baseNose);
    const [arm, setArms] = useRecoilState(baseArms);
    const [item, setItem] = useRecoilState(baseItem);
    const [mouth, setMouth] = useRecoilState(baseMouth);
    const [head, setHead] = useRecoilState(baseHead);

    const saveMessage=()=>{
        setMessageContents((prev)=>({...prev, letter:messageRef.current.value, creater: createrRef.current.value}));
    }


    const handleSubmit =()=>{
        axios.post(
            `${process.env.REACT_APP_BE_SERVER_DOMAIN}api/v1/place/${invitationCode}/snowman`,
            {
                "head": `${head[0].Head}`,
                "accessary": `${item[0].Item}`,
                "eye": `${eye[0].Eye}`,
                "nose": `${nose[0].Nose}`,
                "mouse": `${mouth[0].Mouth}`,
                "arm": `${arm[0].Eye}`,
                "letter" : `${messageContents.letter}`,
                "creator": `${messageContents.creater}`
            },
        )
        .then((response) => {
            navigate("/grid");
        });
    }

    


    console.log(messageContents);
    return (
        <>
        <TextZone>
            <WriterCon>
                <div>
                    <p> 만든이 </p>
                    <WRName placeholder='닉네임을 입력해주세요(최대 10자)'
                    maxLength={10}
                    ref={createrRef}/>
                </div>
            </WriterCon>

            <ContentsCon>
                <div>
                    <p> 메세지 내용 </p>
                    <MessageContents 
                    placeholder='메시지를 작성해주세요 (최대 100자)'
                    maxLength={100}
                    ref={messageRef}/>
                </div>
            </ContentsCon>

            <ShortButton onClick={()=>{saveMessage(); isClickedSaveBt()}}> 저장 </ShortButton>


        </TextZone>

        <ContainerEdit modal={saveComp ? true : (saveFirst ? true: false)}>
        {saveFirst?
            <ModalCon> 
            <TextCon>
                <div> 저장한 눈사람과 메세지는 수정할 수 없습니다. </div>
                <div className='save'> 저장하시겠습니까? </div>
            </TextCon>
            <ButtonCon>
                <ShortButtonE onClick={handleSubmit}>확인</ShortButtonE>
                <ShortButtonE onClick={isClickedSaveBt}>취소</ShortButtonE>
            </ButtonCon>
        </ModalCon> : <></>    
        }

        {saveComp?
            <ModalCon className='compSaved'> 
            <TextCon>
                <div> 저장되었습니다. </div>
            </TextCon>
            <ButtonCon>
                <ShortButtonE onClick={isCompSaved}>확인</ShortButtonE>
            </ButtonCon>
        </ModalCon> : <></>    
        }


        </ContainerEdit>
        </>

    )
}
export default WRMessage;

const TextZone = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin: 1rem 0;
`
const WriterCon = styled.section`
& > div> p{
        margin-left: 44.62px;
        margin-bottom:16.5px;
        ${({ theme }) => theme.fonts.kotrahopeCommon}
    }
margin-bottom: 2.75rem;
`

const WRName = styled(Input)`
align-items: flex-start;
text-align: left;

margin-left: 24px;
padding-left:20.5px;

::placeholder{
    color: #B4B4B4;
}
`


const ContentsCon = styled.section`
& > div> p{
        margin-left: 44.62px;
        margin-bottom:16.5px;
        ${({ theme }) => theme.fonts.kotrahopeCommon}
    }

`

const MessageContents = styled.textarea`
width: 23.875rem;
height:  13.125rem; 

border:1px solid transparent;
border-radius:1.25rem;
line-height: normal;  
padding: .8em 1em;

background-color:${({ theme }) => theme.colors.skyblue};
${({ theme }) => theme.fonts.kotrahopeText}

align-items: flex-start;
text-align: left;
margin-left: 24px;
padding-left:20.5px;
overflow: hidden;
margin-bottom: 2.6875rem;

::placeholder{
    color: #B4B4B4;
}
`

const ContainerEdit = styled(Container)`
background: ${(props)=>props.modal===false ? 'transparent' :'rgba(85, 85, 85, 0.2)'};
z-index: ${(props)=>props.modal===false ? -100 :100};
position: absolute;

display: flex;
justify-content: center;
align-items: center;

`

const ModalCon = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 23.875rem;
height: 15.1875rem;

background-color: #FFFFFF;
position: fixed;
margin-bottom: 10rem;
border-radius: 1.0625rem;

box-shadow: 0.3vw 0.3vw 0.6vw rgba(0, 0, 0, 0.3);
`

const TextCon = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

& > div{
    ${({ theme }) => theme.fonts.kotrahopeText}
    font-size: 1.25rem;
    margin-top: 0.6rem;
}
`

const ButtonCon = styled.section`
    display: flex;
    margin-top: 2rem;
`

const ShortButtonE = styled(ShortButton)`
margin: 0 1rem;;
`


