import React, { useState, useEffect } from 'react';

function Form(props) {

  const [request, setRequest] = useState({});

  useEffect(() => {
    const method = props.request.method || 'get';
    const url = props.request.url || '';
    const data = props.request.data ? JSON.stringify(props.request.data) : '';
    setRequest({ method, url, data });
  }, [props, setRequest]);

  const changeURL = (e) => {
    let url = e.target.value;
    setRequest({ ...request, url });
  };

  const changeMethod = (method) => {
    setRequest({ ...request, method });
  };

  const changeBody = (e) => {
    try {
      let data = JSON.parse(e.target.value);
      setRequest({ ...request, data });
    } catch (e) { }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    props.handler(request);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="url"
          defaultValue={request.url}
          placeholder="http://api.url.here"
          onChange={changeURL}
        />
        <button>GO!</button>
      </div>
      <div className="methods">
        <span className={`method ${request.method === 'get'}`} onClick={() => changeMethod('get')}>
          GET
        </span>
        <span className={`method ${request.method === 'post'}`} onClick={() => changeMethod('post')}>
          POST
        </span>
        <span className={`method ${request.method === 'put'}`} onClick={() => changeMethod('put')}>
          PUT
        </span>
        <span className={`method ${request.method === 'delete'}`} onClick={() => changeMethod('delete')}>
          DELETE
        </span>

        <textarea name="data" onChange={changeBody} defaultValue={request.data} />

      </div>
    </form >
  );
}

export default Form;
