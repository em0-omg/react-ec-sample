# MEMO

## Lesson1

- homepage component の追加
- scss の追加
  - `yarn add node-sass`

## Lesson2

- コンポーネントの分割
  - components 以下には汎用的な部品を
  - pages 以下には個別のものを
- 動的スタイリングの例

  - imageUrl や size を渡して動的にスタイルを変更

  ```javascript
  const MenuItem = ({ title, imageUrl, size }) => (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={`${size} menu-item`}
    >
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
  ```

## Lesson3

- GoogleFonts

  - アクセスして CDN を取得、index.html に追加
  - App.css に記載

    ```css
    body {
      font-family: 'Open Sans Condensed';
    }
    ```

## Lesson4

- React Router and Routing

  - `$ yarn add react-router-dom`
  - index.js でインポートして App を囲む

    ```jsx
    import { BrowserRouter } from 'react-router-dom';
    .
    .
    <BrowserRouter>
      <App />
    </BrowserRouter>
    .
    .
    ```

  - App.js にルーティングを記載

    方法 ①

    ```jsx
    .
    .
    import { Route } from 'react-router-dom';
    .
    .
    function App() {
      return (
        <div>
          {/* exactはtrueかfalse、省略も可能 exactがないと例えばhatsのときもbaseとして/が含まれるためhomeも描写される */}
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
        </div>
      );
    }
    .
    .
    ```

    方法 ②

    ```jsx
    .
    .
    import { Switch, Route } from 'react-router-dom';
    .
    .
    function App() {
      return (
        <div>
          {/* Switchならば上から順にマッチングを図る exactがない場合、/hatsと打ってもhomepageが描写されてしまう */}
          <Switch>
            <Route exact={true} path='/' component={HomePage} />
            <Route path='/hats' component={HatsPage} />
          </Switch>
        </div>
      );
    }
    .
    .
    ```

  - URL パラメータ取得

    ```jsx
    .
    .
    const TopicDetail = (props) => {
      console.log(props);
      return (
        <div>
          {/* paramsの値は以下のように取得できる */}
          <h1>TOPIC DETAIL PAGE {props.match.params.topicId}</h1>
        </div>
      );
    };

    function App() {
      return (
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/topics' component={TopicList} />
          <Route path='/topics/:topicId' component={TopicDetail} />
        </div>
      );
    }
    .
    .
    ```

  - History

    - SPA なのでページのマウントの履歴を保持する必要がある

      ```jsx
      .
      .
      import { Route, Link } from 'react-router-dom';
      .
      .
      const TopicList = (props) => {
        console.log(props);
        return (
          <div>
            {/* SPAなのでページ遷移を覚えるためにはこれを使う */}
            <Link to='/'>HOME</Link>
            {/* よりダイナミックに書くには以下 */}
            <button onClick={() => props.history.push('/')}>HOME2</button>
            <h1>TOPIC LIST PAGE</h1>
          </div>
        );
      };
      ```

  - Location

    - 現在のページ URL
    - match した path の値に関係なく現在の URL を表示する

  - match プロパティから動的にリンク作成

    - 現在の自分の path から動的にリンクを作成できる

      ```jsx
      const TopicList = (props) => {
        console.log(props);
        return (
          <div>
            <h1>TOPIC LIST PAGE</h1>
            <Link to={`${props.match.url}/:13`}>TO TOPIC 13</Link>
            <Link to={`${props.match.url}/:14`}>TO TOPIC 14</Link>
            <Link to={`${props.match.url}/:15`}>TO TOPIC 15</Link>
          </div>
        );
      };
      ```

  - withRouter

    ```jsx
    .
    .
    import { withRouter } from 'react-router-dom';
    .
    .
    const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
      <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    );
    .
    .
    // withRouterでhistoryやmatchといったプロパティへアクセスできるようになる
    export default withRouter(MenuItem);
    ```

  - props が多い時の小技

    ```jsx
    render() {
      return (
        <div className='directory-menu'>
          {/* propsの内容が多い場合は以下のようにスプレッドを使うと良い */}
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
        </div>
      );
    }
    ```

## Lesson5

- a リンクの装飾なし

  ```css
  a {
    text-decoration: none;
    color: black;
  }
  ```

## Lesson6

- SignInForm

  - onChange の name から動的に値をセット

    ```jsx
    .
    .
    handleChange = (event) => {
      const { value, name } = event.target;

      this.setState({ [name]: value });
    };
    .
    .
    <input
      name='email'
      type='email'
      onChange={this.handleChange}
      value={this.state.email}
    ></input>
    <label>Email</label>
    <input
      name='password'
      type='password'
      value={this.state.password}
      onChange={this.handleChange}
      required
    ></input>
    <label>Password</label>
    .
    .
    ```

## Lesson7

- Firebase

  - アイコンを手にする

    ```css
    .option {
      padding: 10px 15px;
      // マウスアイコンが手になる
      cursor: pointer;
    }
    ```

  - App.css でこれを書くとボックスの配置が揃う

    ```css
    * {
      box-sizing: border-box;
    }
    ```

## Lesson8

- Redux
  - `$ yarn add redux redux-logger react-redux`
- state の中身が同じだったら再度レンダリングしないようにする
  - `$ yarn add reselect`
- state の永続化
  - `$ yarn add redux-persist`
