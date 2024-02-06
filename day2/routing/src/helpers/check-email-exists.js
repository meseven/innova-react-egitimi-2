const emails = ["mehmet@test.com", "ahmet@test.com", "ayse@test.com"];

export const CheckEmail = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const is_exist = emails.includes(value);

      if (is_exist) {
        return reject({
          success: false,
          message: "Bu mail adresi zaten kullanılıyor.",
        });
      }

      resolve({
        success: true,
      });
    }, 1000);
  });
};
