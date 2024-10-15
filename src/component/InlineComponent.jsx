const component = {color:"red",
                fontSize:"50px",
                backgroundColor:"yellow"
}
export default function InlineComponent(){
    return(
        <div>
            {/* <h1 style={{color:"blue",
                        fontSize:"20px"
            }}>
                Inline Component</h1> */}

            <h1 style={component}>Inline Component</h1>    
        </div>
    );
}