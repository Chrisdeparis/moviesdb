import React from 'react'

class MovieRow extends React.Component {
    viewMovie(){
        // console.log('button view movie')
        // console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render(){
        return <table key={this.props.movie.id}>
                    <tbody>
                        <tr>
                            <td>
                                <img className="poster" width="150px" src={this.props.movie.poster_src} alt="poster"/>
                            </td>
                            <td>
                            
                                <h3>{this.props.movie.title}</h3>       
                                <p>{this.props.movie.overview}</p>  
                                <input className="btn-view" type="button" value="View" onClick={this.viewMovie.bind(this)}/>  

                            </td>
                        </tr>
                    </tbody>
                </table>
        
    }
}

export default MovieRow