import React from "react";

export default class FetchingRandomUser extends React.Component {
  state = {
    loading: true,
    person: null
  };
  async componentDidMount() {
    const url = "https://reqres.in/api/users?page=2";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading.....</div>;
    }

    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading..</div>
        ) : (
          <div>
            {this.state.person &&
              this.state.person.data.map(
                ({ id, email, first_name, last_name, avatar }) => {
                  return (
                    <div>
                      <h4>
                        {first_name} {last_name}
                      </h4>
                      <span>{email}</span>
                      <img src={avatar} alt={id} />
                    </div>
                  );
                }
              )}
          </div>
        )}
      </div>
    );
  }
}
