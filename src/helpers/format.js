export const formarSize = (size) => {
    return (
        size < 1024
          ? (size += "B")
          : (size =
            size < 1048576
                ? (size / 1024).toFixed(0) + "K"
                : size < 1073741824
                ? (size / 1048576).toFixed(0) + "M"
                : (size / 1073741824).toFixed(2) + "G"),
        size
      );
}