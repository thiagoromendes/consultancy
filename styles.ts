//use https://stitches.dev/ to styled

export const Container = styled('div',{
    'display':'flex',
    'flexDirection': 'column',
    'alignItems':'center',
    'justifyItems': 'center',
    'padding': '50px'
})

export const BoxCoordinates = styled(Box,{
    display:'grid',
    gridTemplateColumns:'1fr auto',
    gap:'$5',
    marginTop:'$10',
    padding:'$5 $5 $5 $5',

})

export const Coordinate = styled('button',{
    'backgroundColor': '$gray100',
    'color': '$gray500',
    'textDecoration': 'none',
    'border': 'none',
    'padding': '15px 32px',
    'text-align': 'center',
    'borderRadius': '5px',
    'fontSize': '16px'

})