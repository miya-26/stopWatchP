// ファイル選択インプットとプレビュー画像の要素を取得
const imageInput = document.getElementById('imageInput');
const previewContainer = document.getElementById('preview-container');
const previewImage = document.getElementById('preview');

// ファイルが選択されたときの処理
imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; // 選択されたファイルを取得

    if (file) {
        const reader = new FileReader(); // FileReaderで画像を読み込む

        reader.onload = function(e) {
            previewImage.src = e.target.result; // 読み込んだ画像をプレビューに設定
            previewContainer.style.display = 'block'; // プレビューコンテナを表示
        };

        reader.readAsDataURL(file); // ファイルをデータURLとして読み込む
    } else {
        // ファイルが選択されていない場合、プレビューを非表示に
        previewContainer.style.display = 'none';
    }
});
