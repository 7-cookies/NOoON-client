import styled, {keyframes} from 'styled-components'

export const floating = keyframes`
    0% {
		transform: translateY(0%);	
	}
	50% {
		transform: translateY(15%);	
	}	
	100% {
		transform: translateY(0%);
	}			
`

export const tossing1 = keyframes`
    0% {
		transform: rotate(-1.5deg);	
	}
	50% {
		transform: rotate(1.5deg);
	}
	100% {
		transform: rotate(-1.5deg);	
	}
`

export const tossing2 = keyframes`
    0% {
		transform: rotate(1.5deg);	
	}
	50% {
		transform: rotate(-1.5deg);
	}
	100% {
		transform: rotate(1.5deg);	
	}
`

export const LadingAnimation = styled.div`
    animation-name: ${floating};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
`
