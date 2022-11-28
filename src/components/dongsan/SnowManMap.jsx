import styled from 'styled-components';
import SnowManforGrid from '../../components/dongsan/SnowManforGrid'
import data from '../../mocks/test.json';


const SnowManMap = () => {
    return (
        <>
        {data.snowman.map(({id, head, eye, nose, arm, mouse, accessary, creator})=>(
            <StSnowMan>
              <SnowManforGrid imgSize={12} head={head} eye={eye} nose={nose} arm={arm} mouth={mouse} item={accessary} />
              <div><p>by {creator}</p></div>
              {/* {id%3===0&&<div>dfdfdfdf</div>} */}
            </StSnowMan>
        ))}
        </>
    );
};

export default SnowManMap;

const StSnowMan=styled.div`
    width:12rem;
    height:12rem;

    & > div {
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }
`

