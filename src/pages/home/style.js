import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow:hidden;
    width : 960px;
    margin: 0 auto;
  
`;
export const HomeLeft = styled.div`
    float:left; 
    width : 625px;
    padding-top: 30px;
    margin-left:15px;
    .banner-img{
        width:625px;
        height:270px;
        border-radius: 15px;
    }   
`;
export const HomeRigth = styled.div`
    margin-top: 22px;
    float: right;
    width :300px;
    margin-right:-10px;
   
`;
export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float: left;
    background:#f7f7f7;
    height:32px;
    line-height: 32px;
    font-size: 14px;
    padding-right: 10px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-left: 18px;
    margin-bottom: 10px;
    .topic-pic{
        display:block;
        float: left;
        width:32px;
        height:32px;
        margin-right:10px;
        
    }
`;
export const MoreTopic = styled.a`
padding-left: 20px;
line-height:32px;
font-size: 14px;
color: grey;
`;
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .List-pic{
        float:right;
        display:block;
        width:125px;
        height:100px;
        border-radius:10px;

    }
`;
export const ListInfo = styled.div`
    width: 500px;
    float:left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight: bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        line-height:24px;
        color:#999;

    }

`;
export const LoadMore=styled.div`
    width:100%;
    height:40px;
    margin: 30px 0;
    line-height:40px;
    background: #a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
`;
export const RecommendWrapper = styled.div`
    margin:4px;
`;
export const RecommendItem = styled.div`
    
    background: url(${(props) =>  props.imgUrl });
    background-size:contain;
    width: 100%;
    min-height: 51px;
    margin-bottom: 6px;
    border-radius: 4px;
    vertical-align: middle;
`;
export const WriterWrapper=styled.div`
margin-top: 100px;
width:278px;
border:1px solid #dcdcdc;
height:300px;
line-height:300px;
text-align:center;
margin-left:10px;
`;
export const WriterItem=styled.div`


`;
export const BackTop= styled.div`
    position:fixed;
    right:100px;
    bottom: 100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    font-size:14px;
    border: 1px solid #ccc;
`;


