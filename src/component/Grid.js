import './CSS/Grid.css'
function Grids(props){
    const {children} = props
    return(
        <div className='grid'>
            {children}
        </div>
    )
}
export default Grids