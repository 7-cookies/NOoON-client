import React, {useState} from 'react'
import styled from 'styled-components'
import { Input, ShortButton} from "../../styles/globalStyle";


const WRMessage = () => {

    return (
        <TextZone>
            <WriterCon>
                <div>
                    <p> 만든이 </p>
                    <WRName placeholder='닉네임을 입력해주세요(최대 10자)'/>
                </div>
            </WriterCon>

            <ContentsCon>
                <div>
                    <p> 메세지 내용 </p>
                    <MessageContents placeholder='메시지를 작성해주세요 (최대 100자)'/>
                </div>
            </ContentsCon>


        </TextZone>

    )
}
export default WRMessage;

const TextZone = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

margin: 2rem 0;
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


