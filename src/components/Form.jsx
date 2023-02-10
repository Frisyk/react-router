const Form = (props) => {
  return (
    <div className="container">
        <form onSubmit={props.onClick}>
            <h1>Tambahkan Cerita mu</h1>
            <label htmlFor="title">Nama</label>
            <input type="text" id="title" name='title' placeholder="e.g. Hendra Prasetyo" onChange={props.onChange}/>
            <label htmlFor="body">Cerita mu</label>
            <textarea name='body' id='body' col='30' row='30' placeholder='add more text here' onChange={props.onChange}></textarea>
            <button type="submit" >Kirim</button>
        </form>
    </div>
  )
}

export default Form