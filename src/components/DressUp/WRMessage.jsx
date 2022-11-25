import React, {useState} from 'react'
import styled from 'styled-components'

const WRMessage = () => {

    return (
        <TextZone>
            <WriterCon>
                <Title> 만든이 </Title>
                <WriterName placeholder='닉네임을 입력해주세요(최대 10자)'></WriterName>

            </WriterCon>

            <ContentsCon>
                <Title> 메세지 내용 </Title>
                <MessageContents placeholder='메시지를 작성해주세요(최대 100자)'></MessageContents>
            </ContentsCon>

            <SaveButton > 저장 </SaveButton>
            
        </TextZone>

    )
}
export default WRMessage;

const TextZone = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 26.875rem; 
margin: 2rem 0;
`
const WriterCon = styled.section`
width: 26.875rem; 
margin-bottom: 2.75rem;
`

const Title = styled.section`
margin: 0 2rem;
`

const WriterName = styled.input`
width: 23.875rem;
height: 3.75rem; 
margin: 0 1.5rem;

line-height: normal;  
padding: .8em 1em;
outline-style: none;
border: transparent;
background-color: #E9F3FF;
border-radius: 0.9375rem;
`

const ContentsCon = styled.section`
width: 26.875rem; 

`

const MessageContents = styled.textarea`
width: 23.875rem;
margin: 0 1.5rem;
height: 13.125rem; 

/* line-height: normal;   */
overflow: auto;
padding: 2em 1em;
outline-style: none;
border: transparent;
background-color: #E9F3FF;
border-radius: 0.9375rem;
`

const SaveButton = styled.button`
margin-top: 2.6875rem;
`
