import { useState, useEffect } from 'react';
import facade from './ApiFacade';

function ExApi () {
    let [obj, setObj] = useState()

    useEffect( () => {
        facade.fetchAllData().then(data => setObj(data));
    }, [])
    return (
        <div>
            {
                obj !== undefined &&
                <div>
                    <h5>Chuck Norris Joke:</h5>
                    {obj.chuckNorrisJoke}
                    <h5>Dad Joke:</h5>
                    {obj.dadJoke}
                </div>
            }
        </div>
    )
}
export default ExApi;