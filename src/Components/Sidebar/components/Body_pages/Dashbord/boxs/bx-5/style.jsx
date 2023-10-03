import image from "../../../../../../../assets/images/vi.jpg"

export const style_bx5_p1={
    maxWidth:'300px',
    minWidth:'270px',
    color:'boxItem.text',
    backgroundColor:'boxItem.background',
    borderRadius:'25px',
    minHeight:'300px',
    backgroundImage:`url(${image})`,
    backgroundSize:'cover',
    display:'flex',
    alignItems:'flex-end',
    justifyContent:'center',
    pb:'10px'
};
export const style_bx5_p2={
    backgroundColor:'background.btnGlobal',
    borderRadius:'20px',
    color:'text.primary',
    ':hover':{
        backgroundColor:'#c7c7c7b8'
    }
};