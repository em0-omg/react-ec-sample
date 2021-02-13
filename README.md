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
