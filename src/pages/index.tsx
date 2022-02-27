import { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import { readClipboardText } from '../utils/navigator';

const WqIndexPage: NextPage = () => {
  const [clipboardTextHistories, setClipboardTextHistories] = useState<
    string[]
  >([]);

  const onClickRead = useCallback(async () => {
    await readClipboardText()
      .then(clipboardText => {
        setClipboardTextHistories([...clipboardTextHistories, clipboardText]);
      })
      .catch(console.error);
  }, [clipboardTextHistories, setClipboardTextHistories]);

  useEffect(() => {
    console.log(clipboardTextHistories);
  }, [clipboardTextHistories]);

  return (
    <div>
      <main>
        <section>
          <h1>webqlip</h1>

          <button onClick={onClickRead}>コピーしたテキストを貼り付け</button>

          <ul>
            {clipboardTextHistories.map((clipboardTextHistory, index) => (
              <li key={index}>{clipboardTextHistory}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default WqIndexPage;
