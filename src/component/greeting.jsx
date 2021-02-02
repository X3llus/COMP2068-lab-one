import Typography from '@material-ui/core/Typography';

const Greeting = ({ name }) => {

    if (!name) return null;

    return (
        <div>
            <Typography>
                <h1>Hello {name}, lovely weather isn't it?</h1>
            </Typography>
        </div>
    )
}

export default Greeting;