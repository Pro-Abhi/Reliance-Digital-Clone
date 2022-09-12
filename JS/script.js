// product-categories data store to local-storage
let productCategories = {
  television: [
    {
      id: 1,
      imglink:
        "https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDk1NnxpbWFnZS9qcGVnfGltYWdlcy9oNDcvaDE3Lzk4NDIyMDUxMzA3ODIuanBnfDljNDA4NjY5ZmYwYjNmMTBlMmYwZGEwODNkMTk5M2ZkMDc5MTgzZTAyY2VmNWYwMjJmYWNlZmEwNzBkNmYyZjI",
      name: "Samsung Wondertainment 80 cm (32 Inch) Smart HD Ready TV, UA32T4340BKXXL",
      MRP: 22900,
      MRPx: "₹22,900",
      brand: "Samsung",
      dealprice: 15490,
      dealpricex: "₹15,490",
      discount: 32,
      page: 1,
      discountx: "32%",
      saveprice: 7410,
      savepricex: "₹7,410",
      cashback: "yes",
      Reviews: 15,
      Star: 5,
      img1: "https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w0MjIzfGltYWdlL2pwZWd8aW1hZ2VzL2gwMy9oNWIvOTg0MjIwNDk5OTcxMC5qcGd8MmMwNTYzMjViMjE3OTRiM2I4MTBjYzJkMmJmNzA0ODk2MDI1Mzc3ZjUwYjc0OTg2YmFiNDM5YjEwMWI0ZTYwMQ",
      img2: "https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzMwMzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDNhL2hmNS85ODQyMjAyOTY4MDk0LmpwZ3w3NTcyOWEzMTA2ZTYxN2I2MjUzMWEwMmExYmQ4YTMxNWRlMGNhN2Y3ZWQ3NzFhYmJjMzU2N2Q4YmZjOTY4NDQz",
      img3: "https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMDEyNDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDE2L2hhYi85ODQyMjAzMjk1Nzc0LmpwZ3w2MmQ4NjU5YjQxOWRhMGM1M2M5OWI2ZTZjNDc5ODA0YjIwNmQ3OWQzMjNlYjQwN2U4ZTc0YzQxNjk2ZDJkZWE2",
      keyFeatures: [
        {
          one: "Operating System: Tizen",
          two: "Resolution: 1366 x 768 (HD)",
          three: "Connectivity: 2 HDMI & 2 USB Ports",
          four: "Sound Output (RMS): 20 Watt",
          five: "Refresh Rate: 60 Hz",
        },
      ],
      description: [
        {
          Resolution:
            "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
          Connectivity:
            "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
          Sound: "20 Watts Output | Dolby Digital Plus",
          Features:
            " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
          Display:
            " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
          "Connector Type": "Wi-Fi, USB, Ethernet, HDMI",
          description:
            "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
        },
      ],
    },
    {
      id: 2,
      imglink:
        "https://www.reliancedigital.in/medias/ONEPLUS-32Y1-TV-491895010-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjIzMXxpbWFnZS9qcGVnfGltYWdlcy9oNjkvaDE0Lzk4MTAwNTg5MDM1ODIuanBnfGFiZjk3NDA1MzY1ODQwYjc2OTZkMzY4OTI1Y2RmOWM3OTI4NTE1MTlkMDFlOTUwYmZkM2U5MTVlYmIyZGFlYzg",
      name: "ONEPLUS 81.28 cm (32 inch) HD Smart LED TV, 32Y1",
      MRP: 19999,
      MRPx: "₹19,999",
      brand: "Oneplus",
      dealprice: 15499,
      dealpricex: "₹15,499",
      discount: 23,
      feature: "Wi-Fi",
      page: 1,
      discountx: "23%",
      tvops: "Tizen",
      saveprice: 4500,
      savepricex: "₹4,500",
      cashback: "Yes",
      Reviews: 10,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/ONEPLUS-32Y1-TV-491895010-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjEzMzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGI4L2gyZC85ODEwMDU4NzA2OTc0LmpwZ3w2Yzg5YmJmZWM4NTdhYmY1MDA0OWRkYTFlZTA0ZWM1MzNkYjA4NzNmZDliZWFkYzg2ZWIyZmE5MmE4YjBjNzc3",
      img2: "https://www.reliancedigital.in/medias/ONEPLUS-32Y1-TV-491895010-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MDMyODF8aW1hZ2UvanBlZ3xpbWFnZXMvaDM2L2hkZi85ODEwNjIxODkwNTkwLmpwZ3w5ZDEzYzkwMzQzYmFlMTg0NjRkMzY2NGY1OTUxODEyMjY4OGQzYzU0ZmNiYjczODcwNDc1ZDBjYzZmZmM5NWI3",
      img3: "https://www.reliancedigital.in/medias/ONEPLUS-32Y1-TV-491895010-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjg5MDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGYxL2gyYy85ODEwNjIyNTQ1OTUwLmpwZ3xkNGNiOWJkNTJjNmU3MzVhN2VjNDRjYWVjNjIwYjQzMzE0YTNjMGQ4MzNhYTEyMWZkYzBmMGY4NWY1ODE3YzBl",
      keyFeatures: [
        {
          one: "Operating System: Tizen",
          two: "Resolution: 1366 x 768 (HD)",
          three: "Connectivity: 2 HDMI & 2 USB Ports",
          four: "Sound Output (RMS): 20 Watt",
          five: "Refresh Rate: 60 Hz",
        },
      ],
      description: [
        {
          Resolution:
            "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
          Connectivity:
            "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
          Sound: "20 Watts Output | Dolby Digital Plus",
          Features:
            " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
          Display:
            " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
          "Connector Type": "Wi-Fi, USB, Ethernet, HDMI",
          description:
            "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
        },
      ],
    },
    {
      id: 3,
      imglink:
        "https://www.reliancedigital.in/medias/TCL-D311T-LED-492572945-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODgwN3xpbWFnZS9qcGVnfGltYWdlcy9oMWEvaGE3Lzk4MzE2NzY5MzYyMjIuanBnfGE5M2ZlNmIyNDdkY2EwODAyMDIzYmJhN2E5NzU3MmRlZmUxNGMwYmFkNzA2M2RkYWE3NmNjYWJmMmNhMzE4MjM",
      name: "TCL 81.28 cm (32 inch) 2Yr Warranty HD LED TV, D311T Series, 32D311T",
      MRP: 13990,
      MRPx: "₹13,990",
      brand: "TCL",
      page: 1,
      dealprice: 9990,
      dealpricex: "₹9,990",
      discount: 57,
      discountx: "57%",
      feature: "Wi-Fi",
      saveprice: 4000,
      savepricex: "₹4,000",
      cashback: "no",
      tvops: "Tizen",
      Reviews: 5,
      Star: 5,
      img1: "https://www.reliancedigital.in/medias/TCL-D311T-LED-492572945-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNTYyMjd8aW1hZ2UvanBlZ3xpbWFnZXMvaDNiL2hlOS85ODMxNjc2NzM5NjE0LmpwZ3w5M2Q1ZTlhZTc1YjNkMzVjOTM1YTExZDhlYmUxNGZlZDU4MzIzZDNhYjQzODRkMzI3M2ZkZTdmZTQ3MGEwNWUw",
      img2: "https://www.reliancedigital.in/medias/TCL-D311T-LED-492572945-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjM4MzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGJhL2gwOS85ODMxNjc0NzczNTM0LmpwZ3wxMTAzMzE3OWQ2M2ZiYzBkMmJmOGMwODk3NWNiMmViNTBkYjEyMDFiYmRhMTc2YjBmMmM2M2M3YzFiNDNhYWQw",
      img3: "https://www.reliancedigital.in/medias/TCL-D311T-LED-492572945-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxOTY4OTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDIyL2hhZC85ODMxNjc1MTAxMjE0LmpwZ3wwNmUzNGRiZGI2YzJjNmZmNjE4OTAzZDEzMjMxMzQ0NDlkZjkxOWU0MTE1NmRjZWJjOTBmMjI0NzhkNzliZjdk",
      keyFeatures: [
        {
          one: "Operating System: Tizen",
          two: "Resolution: 1366 x 768 (HD)",
          three: "Connectivity: 2 HDMI & 2 USB Ports",
          four: "Sound Output (RMS): 20 Watt",
          five: "Refresh Rate: 60 Hz",
        },
      ],
      description: [
        {
          Resolution:
            "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
          Connectivity:
            "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
          Sound: "20 Watts Output | Dolby Digital Plus",
          Features:
            " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
          Display:
            " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
          "Connector Type": "Wi-Fi, USB, Ethernet, HDMI",
          description:
            "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
        },
      ],
    },
    {
      id: 4,
      imglink:
        "https://www.reliancedigital.in/medias/Kodak-32HDX7XPRO-Television-492166141-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MzcxOHxpbWFnZS9qcGVnfGltYWdlcy9oNGUvaGI4Lzk1MTE0NzEzNDk3OTAuanBnfDE3MTQ4OGE5OWIzNWUwNjRkZDE0OTRkNTM3MDhjZTAwOGVjYTc4OWZjNzQ0MTdhNzczYzQ5ZTgyYWE2ODRlYzI",
      name: "Kodak 80 cm (32 inch) HD Ready LED Smart TV, 7XPRO Series 32HDX7XPRO, Quad Core Processor, Built-in Chromecast",
      MRP: 18499,
      MRPx: "₹18,499",
      brand: "Kodak",
      dealprice: 11490,
      dealpricex: "₹11,490",
      discount: 38,
      page: 1,
      discountx: "38%",
      saveprice: 7010,
      savepricex: "₹7,010",
      cashback: "no",
      feature: "HDR",
      tvops: "Tizen",
      Reviews: 12,
      Star: 2,
      img1: "https://www.reliancedigital.in/medias/Kodak-32HDX7XPRO-Television-492166141-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MDgyNzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDI3L2hiMy85NTExNDcxMTUzMTgyLmpwZ3w3NWQ4ZWI4NjhmNmRhZDZjZTRjMTM1YzNhM2YyZjkzMWE5NjM3NzQzZGNiNWE1YWI0MzJjODYxMzMyMzMxNGY3",
      img2: "https://www.reliancedigital.in/medias/Kodak-32HDX7XPRO-Television-492166141-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzOTgxODd8aW1hZ2UvanBlZ3xpbWFnZXMvaGI3L2gwZC85NTExNDcyNDYzOTAyLmpwZ3xmNjAwMzg0ODZlMzI2NTQxYWMwZjQ3ZDFiNmI5ZDljNDYwNGQ3MDIzNWZmNjViY2VkMzk4ODI4OTZmYzA1MzEw",
      img3: "https://www.reliancedigital.in/medias/Kodak-32HDX7XPRO-Television-492166141-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MzUxMnxpbWFnZS9qcGVnfGltYWdlcy9oMTEvaGI4Lzk1MTE0NzM0NDY5NDIuanBnfDE2NTY0ZDFmOGRjZDM4NzM4MDMwMDEzZjFiZGFkNzc1OTE1ZTc2MmFkYmM2MmY3ZGQxODU1MjVhNTk0NDZjMWI",
      keyFeatures: [
        {
          one: "Operating System: Tizen",
          two: "Resolution: 1366 x 768 (HD)",
          three: "Connectivity: 2 HDMI & 2 USB Ports",
          four: "Sound Output (RMS): 20 Watt",
          five: "Refresh Rate: 60 Hz",
        },
      ],
      description: [
        {
          Resolution:
            "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
          Connectivity:
            "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
          Sound: "20 Watts Output | Dolby Digital Plus",
          Features:
            " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
          Display:
            " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
          "Connector Type": "Wi-Fi, USB, Ethernet, HDMI",
          description:
            "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
        },
      ],
    },
    {
      id: 5,
      imglink:
        "https://www.reliancedigital.in/medias/Toshiba-43U5050-Televisions-491893300-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NDc0MXxpbWFnZS9wbmd8aW1hZ2VzL2g3My9oZGIvOTgyMDI0ODYzNzQ3MC5wbmd8NTY1YjYwYjViNGQ4OGFhYjU2Y2FmMzhiZmFhNmRkZmViNGIzNTIxY2FlNTQ2OTQ0OTQxNTFjMzc4NTE3MDQwNQ",
      name: "Toshiba 108 cm (43 inch) 4K Ultra HD Vidaa OS Smart LED TV with Dolby Vision and ATMOS, 43U5050",
      MRP: 39990,
      MRPx: "₹39,990",
      brand: "Toshiba",
      dealprice: 24990,
      dealpricex: "₹24,990",
      discount: 38,
      page: 1,
      discountx: "38%",
      saveprice: 10000,
      savepricex: "₹10,000",
      cashback: "no",
      feature: "HDR",
      tvops: "Linux",
      Reviews: 8,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/Toshiba-43U5050-Televisions-491893300-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MTM4MTF8aW1hZ2UvcG5nfGltYWdlcy9oODYvaDI4Lzk4MjAyNDg0NDA4NjIucG5nfGJkN2ZmYmQxYjNmNzY5ZjJmNjc5ZDJkNmM2ZDMyM2ViMGIzN2FjMTJlNDczMTA2ZDQ0NDBkZWRmMWM3MWQ2Y2M",
      img2: "https://www.reliancedigital.in/medias/Toshiba-43U5050-Televisions-491893300-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDQ5NzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGU2L2g4My85NDAyNjQzNDQ3ODM4LmpwZ3w1OTRkODI2YmUzMThmY2YwZGQ4MDI5OWJiYTdmODQ3Yzk3OTkxYjlmYmJkMzM1NTk0MGM2NjZlMTZmODIzODFj",
      img3: "https://www.reliancedigital.in/medias/Toshiba-43U5050-Televisions-491893300-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMTUxOTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2g4Yy85NDAyNjQ1MDg2MjM4LmpwZ3xiOGQzMjE1MzgxZGVhMWQ3ZGQ5MzVmNGJmYjU0ZjIxODc2YTQ0MWFiNWU4NDAxZmYzOGIwNTlkZGE2ZjMyYjJh",
      keyFeatures: [
        {
          one: "Operating System: Tizen",
          two: "Resolution: 1366 x 768 (HD)",
          three: "Connectivity: 2 HDMI & 2 USB Ports",
          four: "Sound Output (RMS): 20 Watt",
          five: "Refresh Rate: 60 Hz",
        },
      ],
      description: [
        {
          Resolution:
            "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
          Connectivity:
            "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
          Sound: "20 Watts Output | Dolby Digital Plus",
          Features:
            " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
          Display:
            " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
          "Connector Type": "Wi-Fi, USB, Ethernet, HDMI",
          description:
            "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
        },
      ],
    },
    {
      id: 6,
      imglink:
        "https://www.reliancedigital.in/medias/Realme-Neo-LED-Televisions-492796729-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NjQ3OXxpbWFnZS9wbmd8aW1hZ2VzL2gzOS9oY2MvOTgwODU0Njc5MTQ1NC5wbmd8N2UzMTIyZjI0MTI1YzQxMGNmNTRmZGZmOTM4Y2ZjZWNkMmU1YWVlN2MyZDdkYmNmOTU0ZjhiYjNhYzQzZDJhZQ",
      name: "Realme 80 cm (32 inch) HD LED Smart TV, Neo",
      MRP: 21999,
      MRPx: "₹21,999",
      brand: "Realme",
      dealprice: 13999,
      dealpricex: "₹13,999",
      page: 1,
      discount: 36,
      discountx: "36%",
      saveprice: 8000,
      savepricex: "₹8,000",
      cashback: "no",
      feature: "HDR",
      USB: 2,
      tvops: "Linux",
      Reviews: 20,
      Star: 5,
      img1: "https://www.reliancedigital.in/medias/Realme-Neo-LED-Televisions-492796729-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTU0MDh8aW1hZ2UvcG5nfGltYWdlcy9oYTUvaGYxLzk4MDg1NDY1OTQ4NDYucG5nfDEyMDAzMmExNTJlZTc5ZDI4YjdkNDgzNWRhMzJjNzMyMmY5NmRiMTkzYTQwNjEzNjVkMjE5NTRjYTk1YzAzZDk",
      img2: "https://www.reliancedigital.in/medias/Realme-Neo-LED-Televisions-492796729-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxOTY0MTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDlkL2g1ZC85ODA4NTQzOTczNDA2LmpwZ3xkMmQ0YTM5NTE3MDU3MmI0MWNjYjZkYThiZmM5OWY0MmJlYmI2Y2NmZjJlZDUzOGQ0NDQwNWIxYjJmZmZmZGEx",
      img3: "https://www.reliancedigital.in/medias/Realme-Neo-LED-Televisions-492796729-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjU4ODB8aW1hZ2UvanBlZ3xpbWFnZXMvaGNlL2hjYy85ODA4NTQ0MzAxMDg2LmpwZ3xmN2YzNTEzYmQ2MjgyOTAxOWYyZjUzMzU2ZjUwOWQwNGY2MmQzNDQ4M2YyZTg1MWNmMzIxZDhiYmFmOWI5ZjUy",
      keyFeatures: [
        {
          one: "Operating System: Tizen",
          two: "Resolution: 1366 x 768 (HD)",
          three: "Connectivity: 2 HDMI & 2 USB Ports",
          four: "Sound Output (RMS): 20 Watt",
          five: "Refresh Rate: 60 Hz",
        },
      ],
      description: [
        {
          Resolution:
            "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
          Connectivity:
            "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
          Sound: "20 Watts Output | Dolby Digital Plus",
          Features:
            " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
          Display:
            " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
          "Connector Type": "Wi-Fi, USB, Ethernet, HDMI",
          description:
            "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
        },
      ],
    },
    {
      id: 7,
      imglink:
        "https://www.reliancedigital.in/medias/Xiaomi-ELA4701IN-Televisions-492571689-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4NzQyMnxpbWFnZS9qcGVnfGltYWdlcy9oZjUvaDZmLzk2OTE2NjA0NTE4NzAuanBnfDA0NzYyMTg0OTQ4ZWZhYTMyM2Y1MTdiNmFhYmQ4MDczYjM1OTA0OTY4MDYwYWZmZjYzMTljMmZhYTFkZjMyYmY",
      name: "Redmi 80 cm (32 inch) HD Smart LED ELA4915/4732/01IN",
      MRP: 24999,
      MRPx: "₹24,999",
      brand: "redmi",
      dealprice: 14999,
      dealpricex: "₹14,999",
      discount: 40,
      page: 1,
      discountx: "40%",
      saveprice: 10000,
      savepricex: "₹10,000",
      cashback: "no",
      feature: "HDMI",
      tvops: "Linux",
      Reviews: 235,
      Star: 5,
      img1: "https://www.reliancedigital.in/medias/Xiaomi-ELA4701IN-Televisions-492571689-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MTQ4MTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGYxL2g3Zi85NjkxNjYwMjU1MjYyLmpwZ3wzZjRhNGVjNTk5YjEzYzNmNjkzNmIzOGY2YmYyY2VhNzM1YjgyZGY1NDMzNzAwY2U4NmM0NjgyNTFmMjJmY2M4",
      img2: "https://www.reliancedigital.in/medias/Xiaomi-ELA4701IN-Televisions-492571689-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNTc1OTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDAyL2gzOS85NjkxNjYxODkzNjYyLmpwZ3wxMGVhNzNiMDNjODlmOWQ0NTNhMGJjODI3NGY3M2ZkZDU3ZDA5NmRjNDVjYjg5MWUxYzRhYmZkODNhNTkxMWUy",
      img3: "https://www.reliancedigital.in/medias/Xiaomi-ELA4701IN-Televisions-492571689-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNTc1OTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDAyL2gzOS85NjkxNjYxODkzNjYyLmpwZ3wxMGVhNzNiMDNjODlmOWQ0NTNhMGJjODI3NGY3M2ZkZDU3ZDA5NmRjNDVjYjg5MWUxYzRhYmZkODNhNTkxMWUy",
      keyFeatures: [
        {
          one: "Operating System: Tizen",
          two: "Resolution: 1366 x 768 (HD)",
          three: "Connectivity: 2 HDMI & 2 USB Ports",
          four: "Sound Output (RMS): 20 Watt",
          five: "Refresh Rate: 60 Hz",
        },
      ],
      description: [
        {
          Resolution:
            "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
          Connectivity:
            "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
          Sound: "20 Watts Output | Dolby Digital Plus",
          Features:
            " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
          Display:
            " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
          "Connector Type": "Wi-Fi, USB, Ethernet, HDMI",
          description:
            "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
        },
      ],
    },
    {
      id: 8,
      imglink:
        "https://www.reliancedigital.in/medias/ONEPLUS-43Y1S-EDGE-SMART-LED-TV-492796557-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MzIyMHxpbWFnZS9qcGVnfGltYWdlcy9oZTkvaDI4Lzk3Nzg1NjMzMTc3OTAuanBnfGYwZTJhZWZhNTdjMzc2MTIwZGFmNzEwYmI1YzEwOWY1NGMzMGE0ZWZkNGJlNTUyMWMwODY3MzkwNGI3OTk1ZWM",
      name: "OnePlus 108 cm (43 inch) Full HD Android Smart LED TV with Dolby Audio Surround Sound Technology, 43Y1S Edge",
      MRP: 33999,
      MRPx: "₹33,999",
      brand: "Oneplus",
      dealprice: 26999,
      dealpricex: "₹26,999",
      discount: 21,
      page: 1,
      discountx: "21%",
      saveprice: 7000,
      savepricex: "₹7,000",
      cashback: "Yes",
      feature: "HDMI",
      tvops: "Linux",
      Reviews: 150,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODYzOTV8aW1hZ2UvanBlZ3xpbWFnZXMvaGFlL2gzOC85ODEwMDU4Mzc5Mjk0LmpwZ3wwYWE2Y2UzOTE3MzU3ODI0ZjJmZjhkZGVmZTVkNzc3ODlmNzIwMjQ3N2U0ZWViMzFmOGYxMmYxZWNiZGM2NGUx",
      img2: "https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0ODY1Mjd8aW1hZ2UvanBlZ3xpbWFnZXMvaDIxL2g4Yi85ODEwNjIyMjE4MjcwLmpwZ3wwYzlkODBmOTZhOTc3ZTU0YjQ2ODQ5ZWY4MjE0ZWJjN2YzZmE2YmMyYmUxYWRhZWZjNjgyODhkMWNhYTQ2OTVk",
      img3: "https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMTgxMDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDg3L2g3Yy85ODEwNjIyODczNjMwLmpwZ3w2MTcxN2ExMzNiNGFkMjhiMGVlMzc5MDBhMjdhZDgwNmI1Y2E1N2RlYTFjMGMxMzA2YTM2YzI2NGMzYWNjMGQ2",
      keyFeatures: [
        {
          one: "Operating System: Tizen",
          two: "Resolution: 1366 x 768 (HD)",
          three: "Connectivity: 2 HDMI & 2 USB Ports",
          four: "Sound Output (RMS): 20 Watt",
          five: "Refresh Rate: 60 Hz",
        },
      ],
      description: [
        {
          Resolution:
            "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
          Connectivity:
            "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
          Sound: "20 Watts Output | Dolby Digital Plus",
          Features:
            " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
          Display:
            " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
          "Connector Type": "Wi-Fi, USB, Ethernet, HDMI",
          description:
            "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
        },
      ],
    },
    {
      id: 9,
      imglink:
        "https://www.reliancedigital.in/medias/Karbonn-KJW24NSHD-LED-TV-492403972-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzc5NXxpbWFnZS9qcGVnfGltYWdlcy9oMGEvaDRlLzk4Mzg5NTY0MTI5NTguanBnfGZjYTUwNWZlN2U1NGQxZmI0YTljMWQ4ZjExMTY4YjlkOThlZDBiZDAxMGMyNWU0YjlmNmZjODliZGQ2YTk4YmY",
      name: "Karbonn 60 cm (24 inch) HD Ready LED TV, Millenium Series KJW24NSHD",
      MRP: 11990,
      MRPx: "₹11,990",
      brand: "Karbonn",
      dealprice: 6990,
      dealpricex: "₹6,990",
      discount: 42,
      page: 1,
      discountx: "42%",
      saveprice: 5000,
      savepricex: "₹5,000",
      cashback: "no",
      feature: "HDMI",
      tvops: "Linux",
      Reviews: 525,
      Star: 5,
      img1: "https://www.reliancedigital.in/medias/Karbonn-KJW24NSHD-LED-TV-492403972-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4NTYzMnxpbWFnZS9qcGVnfGltYWdlcy9oYmQvaGJmLzk4Mzg5NTYyMTYzNTAuanBnfDYzOWJlZWI3MjVlODU4NWQ0NmNmNDQ4NzExZmNmNjU4NzljMjM1Nzk3NjA3MWRhOWQ2ZWNmZmU4ZTA3Y2IwZTA",
      img2: "https://www.reliancedigital.in/medias/Karbonn-KJW24NSHD-LED-TV-492403972-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODYwNTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDI4L2g3MC85ODM4OTU2NTQ0MDMwLmpwZ3wzZTBiNDNkOGEwMDVmMzRhZWU4MDYzNjc0YTZkYzAxNTIxMjhmY2I2YjVhMzFhNjg2MzlkMzdiYjIzNjY3OTQ5",
      img3: "https://www.reliancedigital.in/medias/Karbonn-KJW24NSHD-LED-TV-492403972-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjE0MDN8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2hjZS85ODM4OTU2ODcxNzEwLmpwZ3w5ZDM1Mjk0MzIyNWE3NjU1MmFlZDE3MDMzYzBiOGI1MzVhYjhlNGYzYTFiYmMwOWQyNGY2Zjg4MmI5ODJkOGQ1",
      keyFeatures: [
        {
          one: "Operating System: Tizen",
          two: "Resolution: 1366 x 768 (HD)",
          three: "Connectivity: 2 HDMI & 2 USB Ports",
          four: "Sound Output (RMS): 20 Watt",
          five: "Refresh Rate: 60 Hz",
        },
      ],
      description: [
        {
          Resolution:
            "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
          Connectivity:
            "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
          Sound: "20 Watts Output | Dolby Digital Plus",
          Features:
            " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
          Display:
            " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
          "Connector Type": "Wi-Fi, USB, Ethernet, HDMI",
          description:
            "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
        },
      ],
    },
    {
      id: 10,
      imglink:
        "https://www.reliancedigital.in/medias/LG-32LM562BPTA-Televisions-492338698-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w5NDEyMnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDY3Lzk2MDU1NDcwMzI2MDYuanBnfDM1MWQzMTEzYmEyYWY2MGI0OTViYjJjZmNmNGMxZTUzZTViNTJiOTQ0MmY2ODg1ZDgwOWZhYjdmZmNiNGNkZmU",
      name: "LG 81.28 cm (32 inch) HD LED Smart TV, 32LM562BPTA",
      MRP: 20990,
      MRPx: "₹20,990",
      brand: "LG",
      dealprice: 16490,
      dealpricex: "₹16,490",
      discount: 21,
      discountx: "21%",
      page: 1,
      saveprice: 4500,
      savepricex: "₹4,500",
      cashback: "no",
      feature: "ScheduleRecording",
      tvops: "VIDAA",
      Reviews: 512,
      Star: 5,
      img1: "https://www.reliancedigital.in/medias/LG-32LM562BPTA-Televisions-492338698-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMTg4N3xpbWFnZS9qcGVnfGltYWdlcy9oZjIvaDNkLzk2MDU1NDY5MDE1MzQuanBnfGYxNGQyYjIzMTkwMzNkMGQ3YWU5OWVmMDFjMTdkZmNhMmMxYjA3ZDFlODA5MTNkMTVkNGIyYTU5MjFjNzYyMWQ",
      img2: "https://www.reliancedigital.in/medias/LG-32LM562BPTA-Televisions-492338698-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNTA0MHxpbWFnZS9qcGVnfGltYWdlcy9oYTQvaDA1Lzk2MDU1NDA5Mzc3NTguanBnfDU5N2RmOThiZmNkYjk3YTViODdiODgzOTRiZjUzMTBjMzgzYjEwNWRhMzdhYjU5ODYyMjhlY2Q0MDM2ODQ4Y2Q",
      img3: "https://www.reliancedigital.in/medias/LG-32LM562BPTA-Televisions-492338698-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMzY1NXxpbWFnZS9qcGVnfGltYWdlcy9oOTMvaGFkLzk2MDU1NDE1OTMxMTguanBnfGZmNzhlN2UxNDViY2U3ODY3Y2NkNTMxZmZiNjc4NmI4NGEyYjVkNjE4MzJjNzI0MWQyNzMxYWI0NDRjMGUxZmU",
      keyFeatures: [
        {
          one: "Operating System: Tizen",
          two: "Resolution: 1366 x 768 (HD)",
          three: "Connectivity: 2 HDMI & 2 USB Ports",
          four: "Sound Output (RMS): 20 Watt",
          five: "Refresh Rate: 60 Hz",
        },
      ],
      description: [
        {
          Resolution:
            "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
          Connectivity:
            "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
          Sound: "20 Watts Output | Dolby Digital Plus",
          Features:
            " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
          Display:
            " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
          "Connector Type": "Wi-Fi, USB, Ethernet, HDMI",
          description:
            "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
        },
      ],
    },
  ],
  laptop: [
    {
      id: 11,
      imglink:
        "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDg2MnxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaGI0Lzk4NDkyMzg2NTA5MTAuanBnfDY1ZTdjNmUxYzdiMDczOThhZDMzYjBlZGE1MmZlYTE5ZDZhOGNhZGEzYTU2NDk5YWQ5ODgxMTY4NjA3OTI4ZDE",
      name: "Lenovo 7KIN IdeaPad Slim 3i Laptop (Intel Celeron N4020/4GB/256GB/ Windows 11/MSO/HD), 35.56 cm (14 inch)",
      MRP: 40490,
      MRPx: "₹40,490",
      brand: "Lenovo",
      dealprice: 28980,
      dealpricex: "₹28,980",
      discount: 28,
      discountx: "28%",
      saveprice: 11510,
      savepricex: "₹11,510",
      cashback: "no",
      Reviews: 2565,
      Star: 4,
      img1: "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTE2fGltYWdlL2pwZWd8aW1hZ2VzL2g5ZC9oZWEvOTg0OTIzODUxOTgzOC5qcGd8MWRlMzc2NmUwOGE4MWE4MjZmOWQ1NmViOTk4NDg1ODMwNTlmYzlkYTg5NjkwODkyMmZjOTc4NThhNTYxZWEwYg",
      img2: "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTE4NHxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDY4Lzk4NDkyMjg2MjM5MDIuanBnfGViOWQ0YmIzZjU5MWQwYTIxYzQzMTVjMDg3NjM2OWNkNWYwYmYyMzY5NjRhZTc5MjhmY2E4ZWViNGJjMTcwZDQ",
      img3: "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxODA4M3xpbWFnZS9qcGVnfGltYWdlcy9oMTgvaGVkLzk4NDkyMjk2MDY5NDIuanBnfDgyOGJhMTZiOTk2YWE3Y2VkZmU5NTkzMDk0NWI2ZDIwZTRhOWExMjgyZGE1NzU0YjRlOGIxYjJjNmJlYTFlMjQ",
      keyFeatures: [
        {
          one: "Processor: Intel Celeron N4020 Processor",
          two: "RAM: 4 GB",
          three: "Internal Storage: 256 GB",
          four: "Storage Type : SSD",
          five: "Operating System: Windows 11 Home",
        },
      ],
      description: [
        {
          Processor:
            "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
          OS: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
          "Pre-Installed": "Pre-Installed: MS Office Home and Student 2021",
          "Memory and Storage": " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
          Display:
            "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
          Design: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
          description:
            "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
        },
      ],
    },
    {
      id: 12,
      imglink:
        "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4OTU2OXxpbWFnZS9qcGVnfGltYWdlcy9oMGYvaGYwLzk4MjQ0MzUyNzM3NTguanBnfGQ5NzFkOGZkMjQyNjc1YzVkOGYzNGM0YmJjYmY3NTY2MWI0NTZkMTA2NjgwODQxZGEwMmZlNzU1ZjU3ZWZmYjQ",
      name: "HP 15s-fq4022TU Laptop (11th Gen-Intel Core i5-1155G7/8GB/512GB SSD + 32GB Intel Optane Memory/Intel Iris Xe Graphics/Windows 11/MSO/FHD), 39.6 cm (15.6 inch)",
      MRP: 65444,
      MRPx: "₹65,444",
      brand: "HP",
      dealprice: 55990,
      dealpricex: "₹55,990",
      discount: 14,
      discountx: "14%",
      saveprice: 9454,
      savepricex: "₹9,454",
      cashback: "no",
      Reviews: 256,
      Star: 4,
      img1: "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyOTgwfGltYWdlL2pwZWd8aW1hZ2VzL2hkYS9oY2UvOTgyNDQzNTMzOTI5NC5qcGd8MGU4NDk2MjZiMTdhZTE1MjRlODA1MGU5MDJiYjMzYjU5NGY4MzQxY2JiZWE2MWZjNjhhMWE2ODg5Nzg5MWYwMw",
      img2: "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyOTE1fGltYWdlL2pwZWd8aW1hZ2VzL2hmNS9oZDIvOTgyNDQzNTY2Njk3NC5qcGd8MTQ4NzExNjQ5OWRlYTAzMjEzYzY0ZmZkZDRkMjIyYzVjMDUxYjIwNzM1MThiNjQ0ODI1OWY4MzFmYjMyZDA1MA",
      img3: "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMDI0fGltYWdlL2pwZWd8aW1hZ2VzL2g3NC9oZGQvOTgyNDQzNTk5NDY1NC5qcGd8ZjM5NzFkMjQzODA5YTljMDM5OWIyZjBjNmNjOGZhYzE3MWQ0YmNhMjk1YmNjYmM3MWNiOGVkMzFiZjllMzhjMA",
      keyFeatures: [
        {
          one: "Processor: Intel Celeron N4020 Processor",
          two: "RAM: 4 GB",
          three: "Internal Storage: 256 GB",
          four: "Storage Type : SSD",
          five: "Operating System: Windows 11 Home",
        },
      ],
      description: [
        {
          Processor:
            "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
          OS: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
          "Pre-Installed": "Pre-Installed: MS Office Home and Student 2021",
          "Memory and Storage": " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
          Display:
            "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
          Design: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
          description:
            "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
        },
      ],
    },
    {
      id: 13,
      imglink:
        "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjA1MDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDUzL2hhYi85ODQ5MjM4MTI2NjIyLmpwZ3xhYmVkMDA2OGU1ZmM4ODYzNTdhNzU1NzJmMzIxOTk5NDNkN2RmMDhjNzQ3YzYwOTczYTAyODRiMDVmOTg4ODE5",
      name: "Lenovo 41IN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-1005G1/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 35.56 cm (14 inch)",
      MRP: 53790,
      MRPx: "₹53,790",
      brand: "Lenovo",
      dealprice: 31490,
      dealpricex: "₹31,490",
      discount: 41,
      discountx: "41%",
      saveprice: 22300,
      savepricex: "₹22,300",
      cashback: "no",
      Reviews: 3699,
      Star: 4,
      img1: "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjg2OXxpbWFnZS9qcGVnfGltYWdlcy9oNDkvaDJiLzk4NDkyMzgxOTIxNTguanBnfGQ4MGMyNTRmYThhYTQ3ZmQwMzhkMDk0MGY3N2YzNzRlOWZmYjUxMmE4MGVlOGVjMWQ2ZDY4YjBhNDZkZWJkY2Y",
      img2: "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMzkxMHxpbWFnZS9qcGVnfGltYWdlcy9oMGUvaGY4Lzk4NDkyMjkyNzkyNjIuanBnfGE1NjdiZjgxNDQyYjkwZWExODQzZWNjZWQ4NjViMDk4Mjk1ODZhNTVhMGEyOGYyMDkwMzljMDQ3ZWI0NWY5NmY",
      img3: "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMDQ4fGltYWdlL2pwZWd8aW1hZ2VzL2hkNS9oMGQvOTg0OTIzMDI2MjMwMi5qcGd8NzczOGEwNjU3NzkwMDFhMzNmZjU4MTA5ZjQwOGYzMWIwZTg5ZTFiY2EzMzk1Yzg2MWJkZmJhNTJiMWNiZmExNg",
      keyFeatures: [
        {
          one: "Processor: Intel Celeron N4020 Processor",
          two: "RAM: 4 GB",
          three: "Internal Storage: 256 GB",
          four: "Storage Type : SSD",
          five: "Operating System: Windows 11 Home",
        },
      ],
      description: [
        {
          Processor:
            "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
          OS: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
          "Pre-Installed": "Pre-Installed: MS Office Home and Student 2021",
          "Memory and Storage": " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
          Display:
            "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
          Design: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
          description:
            "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
        },
      ],
    },
    {
      id: 14,
      imglink:
        "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NzA0NzV8aW1hZ2UvanBlZ3xpbWFnZXMvaDIxL2g3NS85ODQxMjI3MzAwODk0LmpwZ3xmZWFjMjg5NzlhMTY5OTZmNDZkYTczZjlmNWY1YmY5YTRhMDVjN2RiZjhiYmM1YTNjNWI1N2QzNmMyNjRlZWYz",
      name: "Acer A315-23 Aspire 3 Laptop (AMD Ryzen 3-3250U/4 GB/256 GB SSD/AMD Radeon Graphics/Windows 11/ Full HD), 39.62 cm (15.6 inch)",
      MRP: 39999,
      MRPx: "₹39,999",
      brand: "Acer",
      dealprice: 29990,
      dealpricex: "₹29,990",
      discount: 25,
      discountx: "25%",
      saveprice: 10009,
      savepricex: "₹10,009",
      cashback: "no",
      Reviews: 2479,
      Star: 5,
      img1: "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w4NDM1fGltYWdlL2pwZWd8aW1hZ2VzL2g3YS9oNWYvOTg0MTIyNzM2NjQzMC5qcGd8YTI5NmMwNjlmOGQyNWIyMTg5N2MzMWRlYTM1MzhkMzcxOTJiNWYzYWE1MmNiZTVlN2ZkMjYwMjFkYWY0NTk5OQ",
      img2: "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMTc4NHxpbWFnZS9qcGVnfGltYWdlcy9oNmMvaDYzLzk4NDEyMTkxNzQ0MzAuanBnfDQxNTA0NjcwNWEyYTM1MTZlYjI3MzUxM2M3MzYxMWM1ODIzZGI2NWZlOWEzYTY5MGYzMjQ3OTc0MDM3ZjY4Nzk",
      img3: "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w1ODQ1fGltYWdlL2pwZWd8aW1hZ2VzL2hhYy9oNTAvOTg0MTIyMDQ4NTE1MC5qcGd8NmY5ZjhiZjlmNTZjNmIzZWNmOTUwY2E2NDJlMGJkYmM0MGM1OTJmY2ZkZjlkOTYxYzUwZGQxZWUxODRiOWMxNQ",
      keyFeatures: [
        {
          one: "Processor: Intel Celeron N4020 Processor",
          two: "RAM: 4 GB",
          three: "Internal Storage: 256 GB",
          four: "Storage Type : SSD",
          five: "Operating System: Windows 11 Home",
        },
      ],
      description: [
        {
          Processor:
            "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
          OS: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
          "Pre-Installed": "Pre-Installed: MS Office Home and Student 2021",
          "Memory and Storage": " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
          Display:
            "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
          Design: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
          description:
            "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
        },
      ],
    },
    {
      id: 15,
      imglink:
        "https://www.reliancedigital.in/medias/HP-14s-dq3032tu-Laptops-492849723-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyODAzOTB8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ4L2hlNS85ODA3MDk5ODU0ODc4LmpwZ3wxYWQxMjBmMTA3M2ZhN2VkMjY1MjMxYTZhOTYzNjU0NzNiMzAyZWVhMGZkOWZjZDFmMzIzNzJiODcwYzY5NWMy",
      name: "HP 14s-dq3032tu Thin & Light Laptop (Intel Celeron N4500/8GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/HD), 35.56 cm (14 inch)",
      MRP: 37006,
      MRPx: "₹37,006",
      brand: "HP",
      dealprice: 29990,
      dealpricex: "₹29,990",
      discount: 19,
      discountx: "19%",
      saveprice: 7016,
      savepricex: "₹7,016",
      cashback: "no",
      Reviews: 2569,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/HP-14s-dq3032tu-Laptops-492849723-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMTY1M3xpbWFnZS9qcGVnfGltYWdlcy9oYWEvaDU5Lzk4MDcwOTk5MjA0MTQuanBnfGQwZDdiMTdlYzVkYWU0OWMxZDBjMDM3MjExZTJiNTBjN2ViZDgwNzNmMDFkMzY1MmFhOTQyN2U1ZWI2ZjlhMGE",
      img2: "https://www.reliancedigital.in/medias/HP-14s-dq3032tu-Laptops-492849723-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMTkxM3xpbWFnZS9qcGVnfGltYWdlcy9oYTUvaGU0Lzk4MDcxMDAyNDgwOTQuanBnfDQ3NmJkODU1YzY5MjIyZjM3NjAwNDc2ZTQxZGE3NjU3NjE0ZDM1MGFmZDllNTJmYmFjNDcyZGJlNGRkM2Y1NmU",
      img3: "https://www.reliancedigital.in/medias/HP-14s-dq3032tu-Laptops-492849723-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMTk5N3xpbWFnZS9qcGVnfGltYWdlcy9oMmEvaGJkLzk4MDcxMDA1NzU3NzQuanBnfGQ2MjE4ZDlhZDc3Zjk2OGRhNmUwZTkxOGVhN2Y5ZDdhMDA2YTczNGViMTUxOTM4YzNlNjQwMTYwMTQ0OGY1ZGM",
      keyFeatures: [
        {
          one: "Processor: Intel Celeron N4020 Processor",
          two: "RAM: 4 GB",
          three: "Internal Storage: 256 GB",
          four: "Storage Type : SSD",
          five: "Operating System: Windows 11 Home",
        },
      ],
      description: [
        {
          Processor:
            "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
          OS: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
          "Pre-Installed": "Pre-Installed: MS Office Home and Student 2021",
          "Memory and Storage": " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
          Display:
            "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
          Design: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
          description:
            "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
        },
      ],
    },
    {
      id: 16,
      imglink:
        "https://www.reliancedigital.in/medias/Acer-A314-35-Laptop-492849921-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzYyNjB8aW1hZ2UvanBlZ3xpbWFnZXMvaGIwL2gzNC85ODE5MzE3MjA3MDcwLmpwZ3wxZDU2ZTFlMDdjOGU0NTMyZTcwZTRiMjA3MzAxYzYxNTVlMTkyODZmNzA3NzAxZDRhNDQ3MDViMmY3YTc2NWJk",
      name: "Acer A314-35 Aspire 3 Laptop (Intel Celeron N4500/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/HD), 35.56 cm (14 inch)",
      MRP: 42999,
      MRPx: "₹42,999",
      brand: "Acer",
      dealprice: 26699,
      dealpricex: "₹26,699",
      discount: 38,
      discountx: "38%",
      saveprice: 16300,
      savepricex: "₹16,300",
      cashback: "no",
      Reviews: 799,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/Acer-A314-35-Laptop-492849921-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNDE1fGltYWdlL2pwZWd8aW1hZ2VzL2hkMS9oM2IvOTgxOTMxNzI3MjYwNi5qcGd8ODc2NDgzZTgwOWQxNjg2ODdkMDMyZTc2ZjZlZGRkMGU1YjljNDk4MzgxOGQ4M2M3MzIzMTY3MmJmYzQxYjNhNg",
      img2: "https://www.reliancedigital.in/medias/Acer-A314-35-Laptops-492849921-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTkwN3xpbWFnZS9qcGVnfGltYWdlcy9oYWMvaGQ4Lzk4MTA5NjUyNjY0NjIuanBnfDdkYTZmYWIyZjUwZWZmNWNiNDhlMTFiOTRlMWJmMTBjMmJiZTAwYjk2YTVhMTVhNWNkOWE3MjQ3OWIyNGFkMGQ",
      img3: "https://www.reliancedigital.in/medias/Acer-A314-35-Laptops-492849921-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNTU2MXxpbWFnZS9qcGVnfGltYWdlcy9oYjMvaGUyLzk4MTA5NjU5MjE4MjIuanBnfDcyODkyY2JkZjk3YWE3OWJmMTcxY2Q5ZDg5MDYwZTlhNmJhNmYyMjhmNjY3ZmE5ZjhkMjQ5Mzk2NjZhMzlhNTI",
      keyFeatures: [
        {
          one: "Processor: Intel Celeron N4020 Processor",
          two: "RAM: 4 GB",
          three: "Internal Storage: 256 GB",
          four: "Storage Type : SSD",
          five: "Operating System: Windows 11 Home",
        },
      ],
      description: [
        {
          Processor:
            "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
          OS: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
          "Pre-Installed": "Pre-Installed: MS Office Home and Student 2021",
          "Memory and Storage": " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
          Display:
            "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
          Design: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
          description:
            "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
        },
      ],
    },
    {
      id: 17,
      imglink:
        "https://www.reliancedigital.in/medias/Lenovo-8JIN-Laptops-492850142-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MjAxN3xpbWFnZS9qcGVnfGltYWdlcy9oZWIvaDM2Lzk4NDk0MDg4MTUxMzQuanBnfDBjOWQ4MmJlZjIzMGUwZjIyZDUzNWIzMDVhYzY3ZTFiMGZjZjYzOTg2ZTJkN2E4OGE5YjgyYTA1NDc3ZmZiNWM",
      name: "Lenovo 8JIN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-10110U/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 39.62 cm (15.6 inch)",
      MRP: 53790,
      MRPx: "₹53,790",
      brand: "Lenovo",
      dealprice: 31490,
      dealpricex: "₹31,490",
      discount: 41,
      discountx: "41%",
      saveprice: 22300,
      savepricex: "₹22,300",
      cashback: "no",
      Reviews: 7699,
      Star: 5,
      img1: "https://www.reliancedigital.in/medias/Lenovo-8JIN-Laptops-492850142-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxODk3fGltYWdlL2pwZWd8aW1hZ2VzL2gxMi9oNjIvOTg0OTQwODg4MDY3MC5qcGd8ZWVlMzQ2N2RjYWQ4NzFiMzFiMDYwYTRmYzBmYWRmOTQ1ZTZlNDJmZTAzNjc1YTQ1NTE2NGQ1OTI1MTgyN2MxMA",
      img2: "https://www.reliancedigital.in/medias/Lenovo-8JIN-Laptops-492850142-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMjM1N3xpbWFnZS9qcGVnfGltYWdlcy9oZmQvaDBkLzk4NDk0MDkyMDgzNTAuanBnfDYyMjdkM2NkOTc4ZTU4MmUwYjRjNmE1NTRmZWFjN2YyM2QzMzA5Nzc2NTk4MDA5MDRiZGU4NzE0NGRmZjBiMTQ",
      img3: "https://www.reliancedigital.in/medias/Lenovo-8JIN-Laptops-492850142-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNTk2NXxpbWFnZS9qcGVnfGltYWdlcy9oOTMvaDVkLzk4NDk0MDk1MzYwMzAuanBnfGYyY2QwYjhlYjk2YWEzYTdhM2Q3MGMxMGFmN2UyYjM4NDVmYzhhOTVkMzkyNWVlZTA1ZDNlMmZmOGQxOWNkZjg",
      keyFeatures: [
        {
          one: "Processor: Intel Celeron N4020 Processor",
          two: "RAM: 4 GB",
          three: "Internal Storage: 256 GB",
          four: "Storage Type : SSD",
          five: "Operating System: Windows 11 Home",
        },
      ],
      description: [
        {
          Processor:
            "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
          OS: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
          "Pre-Installed": "Pre-Installed: MS Office Home and Student 2021",
          "Memory and Storage": " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
          Display:
            "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
          Design: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
          description:
            "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
        },
      ],
    },
    {
      id: 18,
      imglink:
        "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDg2MnxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaGI0Lzk4NDkyMzg2NTA5MTAuanBnfDY1ZTdjNmUxYzdiMDczOThhZDMzYjBlZGE1MmZlYTE5ZDZhOGNhZGEzYTU2NDk5YWQ5ODgxMTY4NjA3OTI4ZDE",
      name: "Lenovo 7KIN IdeaPad Slim 3i Laptop (Intel Celeron N4020/4GB/256GB/ Windows 11/MSO/HD), 35.56 cm (14 inch)",
      MRP: 40490,
      MRPx: "₹40,490",
      brand: "Lenovo",
      dealprice: 28980,
      dealpricex: "₹28,980",
      discount: 28,
      discountx: "28%",
      saveprice: 11510,
      savepricex: "₹11,510",
      cashback: "no",
      Reviews: 299,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTE2fGltYWdlL2pwZWd8aW1hZ2VzL2g5ZC9oZWEvOTg0OTIzODUxOTgzOC5qcGd8MWRlMzc2NmUwOGE4MWE4MjZmOWQ1NmViOTk4NDg1ODMwNTlmYzlkYTg5NjkwODkyMmZjOTc4NThhNTYxZWEwYg",
      img2: "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTE4NHxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDY4Lzk4NDkyMjg2MjM5MDIuanBnfGViOWQ0YmIzZjU5MWQwYTIxYzQzMTVjMDg3NjM2OWNkNWYwYmYyMzY5NjRhZTc5MjhmY2E4ZWViNGJjMTcwZDQ",
      img3: "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxODA4M3xpbWFnZS9qcGVnfGltYWdlcy9oMTgvaGVkLzk4NDkyMjk2MDY5NDIuanBnfDgyOGJhMTZiOTk2YWE3Y2VkZmU5NTkzMDk0NWI2ZDIwZTRhOWExMjgyZGE1NzU0YjRlOGIxYjJjNmJlYTFlMjQ",
      keyFeatures: [
        {
          one: "Processor: Intel Celeron N4020 Processor",
          two: "RAM: 4 GB",
          three: "Internal Storage: 256 GB",
          four: "Storage Type : SSD",
          five: "Operating System: Windows 11 Home",
        },
      ],
      description: [
        {
          Processor:
            "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
          OS: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
          "Pre-Installed": "Pre-Installed: MS Office Home and Student 2021",
          "Memory and Storage": " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
          Display:
            "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
          Design: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
          description:
            "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
        },
      ],
    },
    {
      id: 19,
      imglink:
        "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4OTU2OXxpbWFnZS9qcGVnfGltYWdlcy9oMGYvaGYwLzk4MjQ0MzUyNzM3NTguanBnfGQ5NzFkOGZkMjQyNjc1YzVkOGYzNGM0YmJjYmY3NTY2MWI0NTZkMTA2NjgwODQxZGEwMmZlNzU1ZjU3ZWZmYjQ",
      name: "HP 15s-fq4022TU Laptop (11th Gen-Intel Core i5-1155G7/8GB/512GB SSD + 32GB Intel Optane Memory/Intel Iris Xe Graphics/Windows 11/MSO/FHD), 39.6 cm (15.6 inch)",
      MRP: 65444,
      MRPx: "₹65,444",
      brand: "HP",
      dealprice: 55990,
      dealpricex: "₹55,990",
      discount: 14,
      discountx: "14%",
      saveprice: 9454,
      savepricex: "₹9,454",
      cashback: "no",
      Reviews: 1258,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyOTgwfGltYWdlL2pwZWd8aW1hZ2VzL2hkYS9oY2UvOTgyNDQzNTMzOTI5NC5qcGd8MGU4NDk2MjZiMTdhZTE1MjRlODA1MGU5MDJiYjMzYjU5NGY4MzQxY2JiZWE2MWZjNjhhMWE2ODg5Nzg5MWYwMw",
      img2: "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyOTE1fGltYWdlL2pwZWd8aW1hZ2VzL2hmNS9oZDIvOTgyNDQzNTY2Njk3NC5qcGd8MTQ4NzExNjQ5OWRlYTAzMjEzYzY0ZmZkZDRkMjIyYzVjMDUxYjIwNzM1MThiNjQ0ODI1OWY4MzFmYjMyZDA1MA",
      img3: "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMDI0fGltYWdlL2pwZWd8aW1hZ2VzL2g3NC9oZGQvOTgyNDQzNTk5NDY1NC5qcGd8ZjM5NzFkMjQzODA5YTljMDM5OWIyZjBjNmNjOGZhYzE3MWQ0YmNhMjk1YmNjYmM3MWNiOGVkMzFiZjllMzhjMA",
      keyFeatures: [
        {
          one: "Processor: Intel Celeron N4020 Processor",
          two: "RAM: 4 GB",
          three: "Internal Storage: 256 GB",
          four: "Storage Type : SSD",
          five: "Operating System: Windows 11 Home",
        },
      ],
      description: [
        {
          Processor:
            "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
          OS: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
          "Pre-Installed": "Pre-Installed: MS Office Home and Student 2021",
          "Memory and Storage": " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
          Display:
            "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
          Design: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
          description:
            "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
        },
      ],
    },
    {
      id: 20,
      imglink:
        "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjA1MDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDUzL2hhYi85ODQ5MjM4MTI2NjIyLmpwZ3xhYmVkMDA2OGU1ZmM4ODYzNTdhNzU1NzJmMzIxOTk5NDNkN2RmMDhjNzQ3YzYwOTczYTAyODRiMDVmOTg4ODE5",
      name: "Lenovo 41IN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-1005G1/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 35.56 cm (14 inch)",
      MRP: 53790,
      MRPx: "₹53,790",
      brand: "Lenovo",
      dealprice: 31490,
      dealpricex: "₹31,490",
      discount: 41,
      discountx: "41%",
      saveprice: 22300,
      savepricex: "₹22,300",
      cashback: "no",
      Reviews: 2799,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjg2OXxpbWFnZS9qcGVnfGltYWdlcy9oNDkvaDJiLzk4NDkyMzgxOTIxNTguanBnfGQ4MGMyNTRmYThhYTQ3ZmQwMzhkMDk0MGY3N2YzNzRlOWZmYjUxMmE4MGVlOGVjMWQ2ZDY4YjBhNDZkZWJkY2Y",
      img2: "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMzkxMHxpbWFnZS9qcGVnfGltYWdlcy9oMGUvaGY4Lzk4NDkyMjkyNzkyNjIuanBnfGE1NjdiZjgxNDQyYjkwZWExODQzZWNjZWQ4NjViMDk4Mjk1ODZhNTVhMGEyOGYyMDkwMzljMDQ3ZWI0NWY5NmY",
      img3: "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMDQ4fGltYWdlL2pwZWd8aW1hZ2VzL2hkNS9oMGQvOTg0OTIzMDI2MjMwMi5qcGd8NzczOGEwNjU3NzkwMDFhMzNmZjU4MTA5ZjQwOGYzMWIwZTg5ZTFiY2EzMzk1Yzg2MWJkZmJhNTJiMWNiZmExNg",
      keyFeatures: [
        {
          one: "Processor: Intel Celeron N4020 Processor",
          two: "RAM: 4 GB",
          three: "Internal Storage: 256 GB",
          four: "Storage Type : SSD",
          five: "Operating System: Windows 11 Home",
        },
      ],
      description: [
        {
          Processor:
            "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
          OS: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
          "Pre-Installed": "Pre-Installed: MS Office Home and Student 2021",
          "Memory and Storage": " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
          Display:
            "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
          Design: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
          description:
            "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
        },
      ],
    },
  ],
  appliances: [
    {
      id: 21,
      imglink:
        "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMTcyODR8aW1hZ2UvanBlZ3xpbWFnZXMvaGU3L2gxNC85NzU1MTY3NDI0NTQyLmpwZ3wzMzRhZGZmYmZjNzU1YWNiMmQwOGQ2NmNmNjRjZDdlYjE1ZDEzNDAzZmEyN2I5NjZlZjVhYWQ3NTU5M2M4Yjk1",
      name: "Kelvinator 1.8L 1200W Food Grade Electric Kettle with Water Level Indicator, LED Light, Dry Boil Protection, Auto Shut-off, 2 Years Warranty",
      MRP: 1999,
      MRPx: "₹1,999",
      brand: "Kelvinator",
      dealprice: 799,
      dealpricex: "₹799",
      discount: 60,
      discountx: "60%",
      saveprice: 1200,
      savepricex: "₹1,200",
      cashback: "no",
      Reviews: 6899,
      Star: 4,
      img1: "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w2NzgxfGltYWdlL2pwZWd8aW1hZ2VzL2g4My9oZWIvOTc1NTE2NzQ5MDA3OC5qcGd8YzZiMzE0OGMwMDA4Mzc3YTA3ZDFlZDJjNTc2MWMwZGE3YTAyOTI3ZjcwNzU2MDg2NGExZTNjNmUwYjMzZDRkOQ",
      img2: "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w2ODkwfGltYWdlL2pwZWd8aW1hZ2VzL2g2My9oMmEvOTc1NTE2NzgxNzc1OC5qcGd8MGJmMDYzNjdlOWU3NTVkZGQ0NzkwZmEyZjhjZTEzNGViYTEzOThmZjI3M2RhMTMzNGNiZTE0NWE0YjY5ZGFiNQ",
      img3: "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w0MzU1fGltYWdlL2pwZWd8aW1hZ2VzL2gzZS9oMzkvOTc1NTE2ODE0NTQzOC5qcGd8MDI3Zjc2MGM0OWI5N2JjYWI5OGIzMDIxNDNjZjRkYWQwYjk4NWZjZWM4MDM0OGY2Mzc4ZmQ4OGUyZGFkMjc1MA",
      keyFeatures: [
        {
          one: "1200W, 1.8L Capacity",
          two: "Food Grade Stainless Steel Body",
          three: "Boil Dry protection, Auto shutoff",
          four: "Red Indicator Light, Cordless Kettle",
          five: "Push button to open up the Lid",
        },
      ],
      description: [
        {
          "Heating Element": "Heating Element: Concealed",
          "Suitable For": "Suitable For: Water, Tea & Soups",
          Features: "Features: Concealed Heating Element Cordless Operation",
          "Power Consumption": "Power Consumption: 1200 Watt",
          "Safety Locking Lid": "Safety Locking Lid: YES",
          "Auto On/Off Function": "Auto On/Off Function: YES",
          Description:
            "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
        },
      ],
    },
    {
      id: 22,
      imglink:
        "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODMyODh8aW1hZ2UvanBlZ3xpbWFnZXMvaGU0L2g3YS85NjIwMzI4NDE1MjYyLmpwZ3xiYmIwYzMwMzI0YWYyMmM0MjdjYTM5Mzc0ODk5MWY0MmFiYWEwNGU0YWZhNzIzNDUwMDQ0YmFmMTE0ODlmNzhj",
      name: "BPL Beard Trimmer with Digital Battery Indicator, 70mins Cordless Usage, Fast Charging, 4 Comb Settings, 2 Years Warranty, Black and Light Gold",
      MRP: 1699,
      MRPx: "₹1,699",
      brand: "BPL",
      dealprice: 349,
      dealpricex: "₹349",
      discount: 79,
      discountx: "79%",
      saveprice: 1350,
      savepricex: "₹1,350",
      cashback: "no",
      Reviews: 789,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNTU3MXxpbWFnZS9qcGVnfGltYWdlcy9oYmIvaGEzLzk2MjAzMjg0ODA3OTguanBnfGY5OTc1OTliMDUyN2MwMDg5NmE0ZjcxZjUzNzNiMDdlYWY2NmM4NmZlOGE4NmJlOTg0Zjk2YjAxY2VkZTQyN2M",
      img2: "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMjA2MHxpbWFnZS9qcGVnfGltYWdlcy9oOWEvaDNiLzk2MjAzMjg4MDg0NzguanBnfDAwMTczNjQ4ZDRmOWI0ZmQ5ZTYzZjdhZmRjZjAwOGIyYmM4OTI1YWYwMDY1ZDY5OGMzOWIxZGNlZGExZjBjZDY",
      img3: "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjQyNnxpbWFnZS9qcGVnfGltYWdlcy9oM2MvaDlmLzk2MjAzMjkxMzYxNTguanBnfDVhY2FiNWRjMjliOGZmNTZhZTQ5NmMxNDljMTFmODgxNTEzYTFjMWRiNGYwZDAxM2VmNmY3OTQ5NTFhNmI2Nzg",
      keyFeatures: [
        {
          one: "1200W, 1.8L Capacity",
          two: "Food Grade Stainless Steel Body",
          three: "Boil Dry protection, Auto shutoff",
          four: "Red Indicator Light, Cordless Kettle",
          five: "Push button to open up the Lid",
        },
      ],
      description: [
        {
          "Heating Element": "Heating Element: Concealed",
          "Suitable For": "Suitable For: Water, Tea & Soups",
          Features: "Features: Concealed Heating Element Cordless Operation",
          "Power Consumption": "Power Consumption: 1200 Watt",
          "Safety Locking Lid": "Safety Locking Lid: YES",
          "Auto On/Off Function": "Auto On/Off Function: YES",
          Description:
            "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
        },
      ],
    },
    {
      id: 23,
      imglink:
        "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
      name: "Panasonic 1.8 litres Rice Cooker, SR-WA18 (GE9)",
      MRP: 3395,
      MRPx: "₹3,395",
      brand: "Panasonic",
      dealprice: 1699,
      dealpricex: "₹1,699",
      discount: 50,
      discountx: "50%",
      saveprice: 1696,
      savepricex: "₹1,696",
      cashback: "no",
      Reviews: 3659,
      Star: 2,
      img1: "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
      img2: "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
      img3: "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
      keyFeatures: [
        {
          one: "1200W, 1.8L Capacity",
          two: "Food Grade Stainless Steel Body",
          three: "Boil Dry protection, Auto shutoff",
          four: "Red Indicator Light, Cordless Kettle",
          five: "Push button to open up the Lid",
        },
      ],
      description: [
        {
          "Heating Element": "Heating Element: Concealed",
          "Suitable For": "Suitable For: Water, Tea & Soups",
          Features: "Features: Concealed Heating Element Cordless Operation",
          "Power Consumption": "Power Consumption: 1200 Watt",
          "Safety Locking Lid": "Safety Locking Lid: YES",
          "Auto On/Off Function": "Auto On/Off Function: YES",
          Description:
            "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
        },
      ],
    },
    {
      id: 24,
      imglink:
        "https://www.reliancedigital.in/medias/Reconnect-DSM302-CA-Sandwich-Maker-491604309-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NjI4NzJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDcwL2gyNS85NTQ1NDI5Mzg1MjQ2LmpwZ3wyZDQ1NGMxYjAxNTdiN2IwYTc2NDRlYzFkNzA1YzYyMjQ1NWFhY2JjMGZiOWQwNjAwNWM4MTljNDUxNDhhZDRl",
      name: "Reconnect Captain America Sandwich Maker with Theme Impression, Non-Stick Plates, Cool Coating for Burn-Free Touch, Heat-up Light Indicator, Lid Lock, Compact Vertical Storage, 2 Years Warranty",
      MRP: 2199,
      MRPx: "₹2,199",
      brand: "Reconnect",
      dealprice: 799,
      dealpricex: "₹799",
      discount: 64,
      discountx: "64%",
      saveprice: 1400,
      savepricex: "₹1,400",
      cashback: "no",
      Reviews: 99,
      Star: 1,
      img1: "https://www.reliancedigital.in/medias/Reconnect-DSM302-CA-Sandwich-Maker-491604309-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNzU3N3xpbWFnZS9qcGVnfGltYWdlcy9oZDEvaGEzLzk1NDU0Mjk0NTA3ODIuanBnfDQzY2Y2NmY2YjkzZWFmZWIzNGYzYTYwMTY5MzNkYmZmMjYxODgwOWUxNGRmMDMxYmI4MmE2MGQzNzFmMmE5ZGY",
      img2: "https://www.reliancedigital.in/medias/Reconnect-DSM302-CA-Sandwich-Maker-491604309-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNzE2NHxpbWFnZS9qcGVnfGltYWdlcy9oMWQvaDgwLzk1NDU0MjUxMjU0MDYuanBnfGJkNDdlMzQzMzVmOTQ0MzVkYzRkZDg3YWZkN2I3ZTgzOTNkZDM0ODA5NTY4YTA1ODNiNzg1YTU3Y2RlZjQ4MjU",
      img3: "https://www.reliancedigital.in/medias/Reconnect-DSM302-CA-Sandwich-Maker-491604309-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjUxMXxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaGQ2Lzk1NDU0MjU3ODA3NjYuanBnfGE3ZDhlOGE3ZjBmZjdlYjUyYWRhOGY0ZjI3MWQwNDUxNzkxZjdlNjU4ZmEyZjZmMTkxMzdjYzFkNmZmZWIxMDU",
      keyFeatures: [
        {
          one: "1200W, 1.8L Capacity",
          two: "Food Grade Stainless Steel Body",
          three: "Boil Dry protection, Auto shutoff",
          four: "Red Indicator Light, Cordless Kettle",
          five: "Push button to open up the Lid",
        },
      ],
      description: [
        {
          "Heating Element": "Heating Element: Concealed",
          "Suitable For": "Suitable For: Water, Tea & Soups",
          Features: "Features: Concealed Heating Element Cordless Operation",
          "Power Consumption": "Power Consumption: 1200 Watt",
          "Safety Locking Lid": "Safety Locking Lid: YES",
          "Auto On/Off Function": "Auto On/Off Function: YES",
          Description:
            "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
        },
      ],
    },
    {
      id: 25,
      imglink:
        "https://www.reliancedigital.in/medias/hindware-calisto-Water-Purifier-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNzk5OXxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaDJlLzk3NDQ0NDcxMTExOTguanBnfDg5YzRlZDBlMjNjZDIyMDE2OGJmZjgxZjlkYWQyNWMwNzkxNGI1NTgzMWQ5OGM0NmI2NDRmZmFiOGJhMDliZjI",
      name: "Hindware Calisto 7 Litres RO+UV+UF Water Purifier with Smart LED Indicators, White (WR-18071UFN)",
      MRP: 14990,
      MRPx: "₹14,990",
      brand: "Hindware",
      dealprice: 7299,
      dealpricex: "₹7,299",
      discount: 51,
      discountx: "51%",
      saveprice: 7691,
      savepricex: "₹7,691",
      cashback: "no",
      Reviews: 2369,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/hindware-calisto-Water-Purifier-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNDYxfGltYWdlL2pwZWd8aW1hZ2VzL2g1Zi9oNjkvOTc0NDQ0NzE3NjczNC5qcGd8ZTcwMWJmYzdjZDBmZGY4NThjZjcyNWNiOGY0OTk0NDYzZTEwZDcwYzQ5OTY5ODM5NzE4NTAzZWQ2NWZhNmM3OA",
      img2: "https://www.reliancedigital.in/medias/hindware-calisto-Water-Purifier-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNTQyfGltYWdlL2pwZWd8aW1hZ2VzL2g3MC9oMzkvOTc0NDQ0NzUwNDQxNC5qcGd8ZGFmYmIwZGZlMjJiY2VjZTA1Zjc3NWVjMmExMzljN2VmNmYwYmU0MmIzZGQ0NTEyMGMxNGVkY2NhYWYwMjU5MQ",
      img3: "https://www.reliancedigital.in/medias/hindware-calisto-Water-Purifier-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNTI4fGltYWdlL2pwZWd8aW1hZ2VzL2g1YS9oNDEvOTc0NDQ0NzgzMjA5NC5qcGd8YmYwNzU5OTg0NTUzN2RiZmUxMjYzMzcyNjIwZDk1MGJkOWRhNGRmYjYxZTFlMjIzMTc1ODQxYzczM2IwMzg2NA",
      keyFeatures: [
        {
          one: "1200W, 1.8L Capacity",
          two: "Food Grade Stainless Steel Body",
          three: "Boil Dry protection, Auto shutoff",
          four: "Red Indicator Light, Cordless Kettle",
          five: "Push button to open up the Lid",
        },
      ],
      description: [
        {
          "Heating Element": "Heating Element: Concealed",
          "Suitable For": "Suitable For: Water, Tea & Soups",
          Features: "Features: Concealed Heating Element Cordless Operation",
          "Power Consumption": "Power Consumption: 1200 Watt",
          "Safety Locking Lid": "Safety Locking Lid: YES",
          "Auto On/Off Function": "Auto On/Off Function: YES",
          Description:
            "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
        },
      ],
    },
    {
      id: 26,
      imglink:
        "https://www.reliancedigital.in/medias/BPL-BBT001MLC-Beard-Trimmer-491903144-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNDIyMzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGU0L2g5Yy85NjEzNTc0MzczNDA2LmpwZ3w2YzY0NjMyNGRmYjQ5NTIzNWI3Y2FlODQ4YzFmN2JkNjRkNGM2YmJiZTJlMDA3NDQ5YTJhZTMxODQ3MGMwNWRl",
      name: "BPL 2-in-1 Beard and Nose Trimmer, 45mins Cordless Usage, 3mm-12mm Adjustable Comb, 2 Years Warranty, Navy Blue",
      MRP: 1299,
      MRPx: "₹1,299",
      brand: "BPL",
      dealprice: 349,
      dealpricex: "₹349",
      discount: 73,
      discountx: "73%",
      saveprice: 950,
      savepricex: "₹950",
      cashback: "no",
      Reviews: 2145,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/BPL-BBT001MLC-Beard-Trimmer-491903144-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNTkwMXxpbWFnZS9qcGVnfGltYWdlcy9oNTQvaDEwLzk2MTM1NzQ0Mzg5NDIuanBnfDk1ZmI2NTNlODMzNzBhZTk5ZGQwZDZkYmEzOWViN2RmZGNlNjkyOWMzZGVlN2Q4ZTEyMTg5ZjA4NTUyOGI4Zjg",
      img2: "https://www.reliancedigital.in/medias/BPL-BBT001MLC-Beard-Trimmer-491903144-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMTA2OXxpbWFnZS9qcGVnfGltYWdlcy9oZWEvaDVmLzk2MTM1NzQ3NjY2MjIuanBnfDU4MjJlZTI5MjJmMmNlNjc4YWI3ZTM1MGU4YjJlZWMwZmZhZDRlYmNkOTBmMjcwZTRkNDFlMzIwYjM5MDkzYzM",
      img3: "https://www.reliancedigital.in/medias/BPL-BBT001MLC-Beard-Trimmer-491903144-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMjg1M3xpbWFnZS9qcGVnfGltYWdlcy9oOGMvaGMzLzk2MTM1NzUwOTQzMDIuanBnfGY4NzljNWIxOTA5MDA0ZWI1MTkyYzM2YjcxYzI2OTYyYzcwM2Q0YWU2NjFkOWVmNzU5YTFlMzAyOWQxMTA3ODg",
      keyFeatures: [
        {
          one: "1200W, 1.8L Capacity",
          two: "Food Grade Stainless Steel Body",
          three: "Boil Dry protection, Auto shutoff",
          four: "Red Indicator Light, Cordless Kettle",
          five: "Push button to open up the Lid",
        },
      ],
      description: [
        {
          "Heating Element": "Heating Element: Concealed",
          "Suitable For": "Suitable For: Water, Tea & Soups",
          Features: "Features: Concealed Heating Element Cordless Operation",
          "Power Consumption": "Power Consumption: 1200 Watt",
          "Safety Locking Lid": "Safety Locking Lid: YES",
          "Auto On/Off Function": "Auto On/Off Function: YES",
          Description:
            "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
        },
      ],
    },
    {
      id: 27,
      imglink:
        "https://www.reliancedigital.in/medias/Inalsa-Jazz-Pro-Juicer-Mixer-Grinder-491959502-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjk2MjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDE5L2hmOS85NTUwNjQxNjkyNzAyLmpwZ3w0OWYzYWU2YmM3ZTQ1ZTYyYjNjZWQ3NjdiZWJlMTFkNGQ4YTRhYTFhMmQ5MWRiZjA2NmViNTE4NmRkYTc2MzQy",
      name: "Inalsa Jazz Pro 550 Watts Mixer Grinder With 3 Speed Setting",
      MRP: 4495,
      MRPx: "₹4,495",
      brand: "Inalsa",
      dealprice: 1499,
      dealpricex: "₹1,499",
      discount: 67,
      discountx: "67%",
      saveprice: 2996,
      savepricex: "₹2,996",
      cashback: "no",
      Reviews: 210,
      Star: 2,
      img1: "https://www.reliancedigital.in/medias/Inalsa-Jazz-Pro-Juicer-Mixer-Grinder-491959502-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTk2MnxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaGRhLzk1NTA2NDE3NTgyMzguanBnfDJjMzBiYmFhZDgyMzEyMzczOTA1YjIwZjI2ZmQwMDZjNWZmZjFkN2Y0M2IxYzM1ZDVhMWQzZjQzMmU4MmFkOTg",
      img2: "https://www.reliancedigital.in/medias/Inalsa-Jazz-Pro-Juicer-Mixer-Grinder-491959502-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjUxMHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGRiLzk1NTA2NDIwODU5MTguanBnfDlkYWY4NWZiYjdlNDI0M2JjNWM3OTk2ZjhkNGEwNDI1NmRhZjQ5Nzg1MmYxYTc4MTA0NzY2MGZmNDEyOGQ0MGE",
      img3: "https://www.reliancedigital.in/medias/Inalsa-Jazz-Pro-Juicer-Mixer-Grinder-491959502-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyOTc1OXxpbWFnZS9qcGVnfGltYWdlcy9oMzMvaGM5Lzk1NTA2NDI0MTM1OTguanBnfDE5NGEzOWRhNTZkYTFmOTNmNGYyYjgwZjFjMTBjNmFkMTRmOGMzMjIwNmNmMGFkZjg0MzAwNmRmYzZhNzcxMDM",
      keyFeatures: [
        {
          one: "1200W, 1.8L Capacity",
          two: "Food Grade Stainless Steel Body",
          three: "Boil Dry protection, Auto shutoff",
          four: "Red Indicator Light, Cordless Kettle",
          five: "Push button to open up the Lid",
        },
      ],
      description: [
        {
          "Heating Element": "Heating Element: Concealed",
          "Suitable For": "Suitable For: Water, Tea & Soups",
          Features: "Features: Concealed Heating Element Cordless Operation",
          "Power Consumption": "Power Consumption: 1200 Watt",
          "Safety Locking Lid": "Safety Locking Lid: YES",
          "Auto On/Off Function": "Auto On/Off Function: YES",
          Description:
            "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
        },
      ],
    },
    {
      id: 28,
      imglink:
        "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMTcyODR8aW1hZ2UvanBlZ3xpbWFnZXMvaGU3L2gxNC85NzU1MTY3NDI0NTQyLmpwZ3wzMzRhZGZmYmZjNzU1YWNiMmQwOGQ2NmNmNjRjZDdlYjE1ZDEzNDAzZmEyN2I5NjZlZjVhYWQ3NTU5M2M4Yjk1",
      name: "Kelvinator 1.8L 1200W Food Grade Electric Kettle with Water Level Indicator, LED Light, Dry Boil Protection, Auto Shut-off, 2 Years Warranty",
      MRP: 1999,
      MRPx: "₹1,999",
      brand: "Kelvinator",
      dealprice: 799,
      dealpricex: "₹799",
      discount: 60,
      discountx: "60%",
      saveprice: 1200,
      savepricex: "₹1,200",
      cashback: "no",
      Reviews: 269,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w2NzgxfGltYWdlL2pwZWd8aW1hZ2VzL2g4My9oZWIvOTc1NTE2NzQ5MDA3OC5qcGd8YzZiMzE0OGMwMDA4Mzc3YTA3ZDFlZDJjNTc2MWMwZGE3YTAyOTI3ZjcwNzU2MDg2NGExZTNjNmUwYjMzZDRkOQ",
      img2: "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w2ODkwfGltYWdlL2pwZWd8aW1hZ2VzL2g2My9oMmEvOTc1NTE2NzgxNzc1OC5qcGd8MGJmMDYzNjdlOWU3NTVkZGQ0NzkwZmEyZjhjZTEzNGViYTEzOThmZjI3M2RhMTMzNGNiZTE0NWE0YjY5ZGFiNQ",
      img3: "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w0MzU1fGltYWdlL2pwZWd8aW1hZ2VzL2gzZS9oMzkvOTc1NTE2ODE0NTQzOC5qcGd8MDI3Zjc2MGM0OWI5N2JjYWI5OGIzMDIxNDNjZjRkYWQwYjk4NWZjZWM4MDM0OGY2Mzc4ZmQ4OGUyZGFkMjc1MA",
      keyFeatures: [
        {
          one: "1200W, 1.8L Capacity",
          two: "Food Grade Stainless Steel Body",
          three: "Boil Dry protection, Auto shutoff",
          four: "Red Indicator Light, Cordless Kettle",
          five: "Push button to open up the Lid",
        },
      ],
      description: [
        {
          "Heating Element": "Heating Element: Concealed",
          "Suitable For": "Suitable For: Water, Tea & Soups",
          Features: "Features: Concealed Heating Element Cordless Operation",
          "Power Consumption": "Power Consumption: 1200 Watt",
          "Safety Locking Lid": "Safety Locking Lid: YES",
          "Auto On/Off Function": "Auto On/Off Function: YES",
          Description:
            "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
        },
      ],
    },
    {
      id: 29,
      imglink:
        "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODMyODh8aW1hZ2UvanBlZ3xpbWFnZXMvaGU0L2g3YS85NjIwMzI4NDE1MjYyLmpwZ3xiYmIwYzMwMzI0YWYyMmM0MjdjYTM5Mzc0ODk5MWY0MmFiYWEwNGU0YWZhNzIzNDUwMDQ0YmFmMTE0ODlmNzhj",
      name: "BPL Beard Trimmer with Digital Battery Indicator, 70mins Cordless Usage, Fast Charging, 4 Comb Settings, 2 Years Warranty, Black and Light Gold",
      MRP: 1699,
      MRPx: "₹1,699",
      brand: "BPL",
      dealprice: 349,
      dealpricex: "₹349",
      discount: 79,
      discountx: "79%",
      saveprice: 1350,
      savepricex: "₹1,350",
      cashback: "no",
      Reviews: 156,
      Star: 1,
      img1: "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNTU3MXxpbWFnZS9qcGVnfGltYWdlcy9oYmIvaGEzLzk2MjAzMjg0ODA3OTguanBnfGY5OTc1OTliMDUyN2MwMDg5NmE0ZjcxZjUzNzNiMDdlYWY2NmM4NmZlOGE4NmJlOTg0Zjk2YjAxY2VkZTQyN2M",
      img2: "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMjA2MHxpbWFnZS9qcGVnfGltYWdlcy9oOWEvaDNiLzk2MjAzMjg4MDg0NzguanBnfDAwMTczNjQ4ZDRmOWI0ZmQ5ZTYzZjdhZmRjZjAwOGIyYmM4OTI1YWYwMDY1ZDY5OGMzOWIxZGNlZGExZjBjZDY",
      img3: "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjQyNnxpbWFnZS9qcGVnfGltYWdlcy9oM2MvaDlmLzk2MjAzMjkxMzYxNTguanBnfDVhY2FiNWRjMjliOGZmNTZhZTQ5NmMxNDljMTFmODgxNTEzYTFjMWRiNGYwZDAxM2VmNmY3OTQ5NTFhNmI2Nzg",
      keyFeatures: [
        {
          one: "1200W, 1.8L Capacity",
          two: "Food Grade Stainless Steel Body",
          three: "Boil Dry protection, Auto shutoff",
          four: "Red Indicator Light, Cordless Kettle",
          five: "Push button to open up the Lid",
        },
      ],
      description: [
        {
          "Heating Element": "Heating Element: Concealed",
          "Suitable For": "Suitable For: Water, Tea & Soups",
          Features: "Features: Concealed Heating Element Cordless Operation",
          "Power Consumption": "Power Consumption: 1200 Watt",
          "Safety Locking Lid": "Safety Locking Lid: YES",
          "Auto On/Off Function": "Auto On/Off Function: YES",
          Description:
            "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
        },
      ],
    },
    {
      id: 30,
      imglink:
        "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
      name: "Panasonic 1.8 litres Rice Cooker, SR-WA18 (GE9)",
      MRP: 3395,
      MRPx: "₹3,395",
      brand: "Panasonic",
      dealprice: 1699,
      dealpricex: "₹1,699",
      discount: 50,
      discountx: "50%",
      saveprice: 1696,
      savepricex: "₹1,696",
      cashback: "no",
      Reviews: 1536,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
      img2: "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
      img3: "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
      keyFeatures: [
        {
          one: "1200W, 1.8L Capacity",
          two: "Food Grade Stainless Steel Body",
          three: "Boil Dry protection, Auto shutoff",
          four: "Red Indicator Light, Cordless Kettle",
          five: "Push button to open up the Lid",
        },
      ],
      description: [
        {
          "Heating Element": "Heating Element: Concealed",
          "Suitable For": "Suitable For: Water, Tea & Soups",
          Features: "Features: Concealed Heating Element Cordless Operation",
          "Power Consumption": "Power Consumption: 1200 Watt",
          "Safety Locking Lid": "Safety Locking Lid: YES",
          "Auto On/Off Function": "Auto On/Off Function: YES",
          Description:
            "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
        },
      ],
    },
  ],
  watches: [
    {
      id: 31,
      imglink:
        "https://www.reliancedigital.in/medias/Hammer-PULSE-3-0-Smart-Watch-492849894-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NTc2NnxpbWFnZS9qcGVnfGltYWdlcy9oOTAvaGVhLzk4MTQ3MTk3MjU1OTguanBnfDIwNmE0ZTYxZWZjODMwMDUxZTBiNWE0ZTM4YzFhODIzNDBkM2FlNmUzZTliNDIyY2I2ZjI5YWMxOGMzYzkwZmE",
      name: "Hammer Pulse 3.0 Bluetooth Calling Smartwatch with Honeycomb Design (Black)",
      MRP: 22900,
      MRPx: "₹22,900",
      brand: "Hammer",
      dealprice: 15490,
      dealpricex: "₹15,490",
      discount: 32,
      discountx: "32%",
      saveprice: 7410,
      savepricex: "₹7,410",
      cashback: "yes",
      Reviews: 1549,
      Star: 4,
      img1: "https://www.reliancedigital.in/medias/Hammer-PULSE-3-0-Smart-Watch-492849894-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxODYyNHxpbWFnZS9qcGVnfGltYWdlcy9oMDcvaDM2Lzk4MTQ3MTk3OTExMzQuanBnfDMyMTE0ZWZkYTRmZTk2ZmNmMTY1YzBlYWFhM2Q5Mzc2MGQwOGJkZTkzYzEzMGUyMGY0YzM2YTg3MDA5MGZiODU",
      img2: "https://www.reliancedigital.in/medias/Hammer-PULSE-3-0-Smart-Watch-492849894-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMjIxMXxpbWFnZS9qcGVnfGltYWdlcy9oNGUvaDVlLzk4MTQ3MjAxMTg4MTQuanBnfDhmZGVhYjEwMGNlYmRkNGU5NmY4Mzc0YmQyODcwNzU3Yjg0YTAyYzMxMWMzYzI2ZDI3NGY4MWVkNmVjMjZmYzc",
      img3: "https://www.reliancedigital.in/medias/Hammer-PULSE-3-0-Smart-Watch-492849894-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMTQxMnxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDU2Lzk4MTQ3MjA0NDY0OTQuanBnfDFkOTdiOGE2NTcxNjQ1MjFlNzg4ZDFhMDQ2OTViZTBhOGIxY2YyODBiYzMxMThkMGU3ODJiY2JiZjY0OGU4MWI",
      keyFeatures: [
        {
          one: "Smooth Flowy Touch, HD Display",
          two: "Superior quality strap, Honeycomb design",
          three: "Compatible with DA FIT App",
          four: "Supports Mic and Speaker",
          five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Watch Shape": "Watch Shape: Rectangle",
          Function:
            "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
          "Dial Shape": "Dial Shape: Rectangle",
          "Compatible Devices":
            "Compatible Devices: Smart Phones & Android Tablet",
          Description:
            "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
        },
      ],
    },
    {
      id: 32,
      imglink:
        "https://www.reliancedigital.in/medias/Fire-Boltt-BSW020-Sports-Fitness-Watches-492575002-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MzYwMjl8aW1hZ2UvanBlZ3xpbWFnZXMvaDYzL2hhOC85ODU4MDg2MjczMDU0LmpwZ3w3MjcwZWI1M2ZkNmE4YTlmODM3ZjdjOWI5Y2IwMGIwMTUzNTliOGFjYTkwOTllOWViMWVlYjYxMGI2ZDdmNWMy",
      name: "Fire-Boltt BSW020 Invincible Smart Watch with Bluetooth calling and 8GB Memory Storage (Black)",
      MRP: 19999,
      MRPx: "₹19,999",
      brand: "Fire-Boltt",
      dealprice: 15499,
      dealpricex: "₹15,499",
      discount: 23,
      discountx: "23%",
      saveprice: 4500,
      savepricex: "₹4,500",
      cashback: "Yes",
      Reviews: 1479,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/Fire-Boltt-BSW020-Sports-Fitness-Watches-492575002-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNTEzMnxpbWFnZS9qcGVnfGltYWdlcy9oMGMvaGNiLzk4NTgwODYzMzg1OTAuanBnfDdkMGI0NDUwM2M0NDNkZTlkNTQ0MDA1MDcyODNjNzExN2EwZjFlNTg5ODZiZjdmN2E0MzRhMDRlMWUxODE5ZTM",
      img2: "https://www.reliancedigital.in/medias/Fire-Boltt-BSW020-Sports-Fitness-Watches-492575002-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNzU4MHxpbWFnZS9qcGVnfGltYWdlcy9oZjIvaGI3Lzk4NTgwODc2NDkzMTAuanBnfDUwZTlmZmJhZmNmMjc3ZjBmMjU5ZTAwOWIxMTQwOWE3N2M0ZTA2NTkxMGUyZmQzMzM5NjY1YjhmY2IyMGZiYzY",
      img3: "https://www.reliancedigital.in/medias/Fire-Boltt-BSW020-Sports-Fitness-Watches-492575002-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMzgxNnxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaGU3Lzk4NTgwODg2MzIzNTAuanBnfDU0ZDVlZGIwOWFhZjQzMjQzMjdlZjQ3NTE3NWE3YTUzNjBlMzNmOTNkYzVlNGFmZmZlODZkZjcyY2QwN2IxNDY",
      keyFeatures: [
        {
          one: "Smooth Flowy Touch, HD Display",
          two: "Superior quality strap, Honeycomb design",
          three: "Compatible with DA FIT App",
          four: "Supports Mic and Speaker",
          five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Watch Shape": "Watch Shape: Rectangle",
          Function:
            "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
          "Dial Shape": "Dial Shape: Rectangle",
          "Compatible Devices":
            "Compatible Devices: Smart Phones & Android Tablet",
          Description:
            "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
        },
      ],
    },
    {
      id: 33,
      imglink:
        "https://www.reliancedigital.in/medias/Fire-Boltt-Smartwatch-BSW001-Black-491996737-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzk2Nzl8aW1hZ2UvanBlZ3xpbWFnZXMvaDA1L2hjZC85NTY2OTg0ODMxMDA2LmpwZ3wxYjlhMjIyOTQ5YzY4ZWQ3ZDBkZDA1ZmRlYTBiMDc2MTBlZWQ5MjU2YjExODIyY2NiMWUxZmY3MzAzYWMzYWFm",
      name: "Fire-Boltt BSW001 Smart Watch with SPO2, Heart Rate, BP, Fitness and Sports Tracking, Black",
      MRP: 13990,
      MRPx: "₹13,990",
      brand: "Fire-Boltt",
      dealprice: 9990,
      dealpricex: "₹9,990",
      discount: 57,
      discountx: "57%",
      saveprice: 4000,
      savepricex: "₹4,000",
      cashback: "no",
      Reviews: 3659,
      Star: 4,
      img1: "https://www.reliancedigital.in/medias/Fire-Boltt-Smartwatch-BSW001-Black-491996737-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w0NDA5fGltYWdlL2pwZWd8aW1hZ2VzL2hjNC9oMTIvOTU2Njk4NDg5NjU0Mi5qcGd8Y2MwYWE1ZTIxN2IyODkyZTVmNDQ1ZDQ4YjFhMzg4NDk4ZTJkNDk4YjAzZDE5MmY3ZGQzZDY5NjY5NmIzMjMxNQ",
      img2: "https://www.reliancedigital.in/medias/Fire-Boltt-Smartwatch-BSW001-Black-491996737-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMjIxM3xpbWFnZS9qcGVnfGltYWdlcy9oYTkvaDRkLzk1NjY5NzUyNjI3NTAuanBnfDRhNDgzYzk4NGJhZTg2NTI1N2IxYThkYWQyYzVlMDVlOGNmODJkZGI5MTZjMGY5ZDQ2OWEyMWE3YzUwYWQ3YzM",
      img3: "https://www.reliancedigital.in/medias/Fire-Boltt-Smartwatch-BSW001-Black-491996737-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNzY0OHxpbWFnZS9qcGVnfGltYWdlcy9oOWUvaDA1Lzk1NjY5NzY5MDExNTAuanBnfDY0NDdkNmE5NGFlYzFhMmYzZTQ1ZjY0NmE3ODhlM2I4MTIyNzE4ZTQ0YWUwNDZjMThjOWEyYzY4NjFiNGE0Yjk",
      keyFeatures: [
        {
          one: "Smooth Flowy Touch, HD Display",
          two: "Superior quality strap, Honeycomb design",
          three: "Compatible with DA FIT App",
          four: "Supports Mic and Speaker",
          five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Watch Shape": "Watch Shape: Rectangle",
          Function:
            "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
          "Dial Shape": "Dial Shape: Rectangle",
          "Compatible Devices":
            "Compatible Devices: Smart Phones & Android Tablet",
          Description:
            "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
        },
      ],
    },
    {
      id: 34,
      imglink:
        "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Smartwatch-492403641-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MTI2M3xpbWFnZS9qcGVnfGltYWdlcy9oNTIvaDE3Lzk4NTIzMTczMzU1ODIuanBnfDM2MWVlZjgwYjJiYzVmYjJkM2Q3N2FjNWNkZTZhYTlmNmE3ODhlMTAxMDVhMDJhZjU3Y2U0YThmZmY1MGU3MjE",
      name: "Fire Boltt Ninja Dial Smartwatch, Navy Blue",
      MRP: 18499,
      MRPx: "₹18,499",
      brand: "Fire Boltt",
      dealprice: 11490,
      dealpricex: "₹11,490",
      discount: 38,
      discountx: "38%",
      saveprice: 7010,
      savepricex: "₹7,010",
      cashback: "no",
      Reviews: 6589,
      Star: 5,
      img1: "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Smartwatch-492403641-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNzQ0fGltYWdlL2pwZWd8aW1hZ2VzL2gyYS9oNzcvOTg1MjMxNzQwMTExOC5qcGd8NDE2MTY5NjkxY2FiODgwYWQ4ODEyMDBmNjE1MDBkYzAzZWVjY2QxZWNmMDljZTE0Y2NhMjUzZTM4ZWQ1ODdjNQ",
      img2: "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Smartwatch-492403641-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w0MzAwfGltYWdlL2pwZWd8aW1hZ2VzL2hmNy9oMjcvOTg1MjMxNzcyODc5OC5qcGd8NTNiNGY3NDRiNWZlNzAyOGViN2YyNDk3NGUzZTg5MWVmNGFlODliMmI3MDhkM2Q3ZWE5ZTdiZWVhZTkxMzI2MA",
      img3: "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Smartwatch-492403641-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNDUzfGltYWdlL2pwZWd8aW1hZ2VzL2hhYS9oM2IvOTg1MjMxODA1NjQ3OC5qcGd8NTc0NDhlNjM1YTE1YTVlN2FkZDMwMjQ0OTkwNTliMmNjODZlYTNhNzlmYTYyZjlhYjRlYWQzOTIwNjdhNmQ4NQ",
      keyFeatures: [
        {
          one: "Smooth Flowy Touch, HD Display",
          two: "Superior quality strap, Honeycomb design",
          three: "Compatible with DA FIT App",
          four: "Supports Mic and Speaker",
          five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Watch Shape": "Watch Shape: Rectangle",
          Function:
            "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
          "Dial Shape": "Dial Shape: Rectangle",
          "Compatible Devices":
            "Compatible Devices: Smart Phones & Android Tablet",
          Description:
            "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
        },
      ],
    },
    {
      id: 35,
      imglink:
        "https://www.reliancedigital.in/medias/Noise-Colorfit-Grande-Smart-Watch-492850519-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MDMwNXxpbWFnZS9qcGVnfGltYWdlcy9oZmIvaDIyLzk4NDMyNjM3OTkzMjYuanBnfDgxNzU4ZTNlMTliMWI2ZTdlMTFiMWU3ODdiZDkwNmExYWZjOTYwYTlhZjk5MGRhODhmODAyZmE1ZDA4NjhhNjE",
      name: "Noise Colorfit Grande Smart Watch, Jet Black",
      MRP: 39990,
      MRPx: "₹39,990",
      brand: "Noise",
      dealprice: 24990,
      dealpricex: "₹24,990",
      discount: 38,
      discountx: "38%",
      saveprice: 10000,
      savepricex: "₹10,000",
      cashback: "no",
      Reviews: 256,
      Star: 2,
      img1: "https://www.reliancedigital.in/medias/Noise-Colorfit-Grande-Smart-Watch-492850519-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxODk4MnxpbWFnZS9qcGVnfGltYWdlcy9oNjUvaDViLzk4NDMyNjM4NjQ4NjIuanBnfDgyNDBhOTMxMTRiNGYzNzVlNzg5MThiNjg5YTUzNzAxZWNjMzA2YzJmNTVmMGIyMjEyZTQzMjdjNDAyZDg2ZWM",
      img2: "https://www.reliancedigital.in/medias/Noise-Colorfit-Grande-Smart-Watch-492850519-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMjg3NHxpbWFnZS9qcGVnfGltYWdlcy9oNDkvaDA3Lzk4NDMyNjQ4NDc5MDIuanBnfDQ3ZTg5NGRiZDNmYTViNWIwMjk2ZDMxZGU1MjAzZWI5MzEwNjhkNWVjOGM4ODEyMjNiMGNhNzc1YzhmZDZiNjk",
      img3: "https://www.reliancedigital.in/medias/Noise-Colorfit-Grande-Smart-Watch-492850519-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMzE0NnxpbWFnZS9qcGVnfGltYWdlcy9oMGQvaDUxLzk4NDMyNjY4MTM5ODIuanBnfDJmNWRiODQ1ZjNlNTI3OGZjZDQ1NGQ5M2JiNjExNjNiNmMzZWUwMzAzMjQ2Y2NhMGI4N2I2ZGU4NGFhNGQ4OTk",
      keyFeatures: [
        {
          one: "Smooth Flowy Touch, HD Display",
          two: "Superior quality strap, Honeycomb design",
          three: "Compatible with DA FIT App",
          four: "Supports Mic and Speaker",
          five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Watch Shape": "Watch Shape: Rectangle",
          Function:
            "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
          "Dial Shape": "Dial Shape: Rectangle",
          "Compatible Devices":
            "Compatible Devices: Smart Phones & Android Tablet",
          Description:
            "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
        },
      ],
    },
    {
      id: 36,
      imglink:
        "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574195-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDY5NjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDZhL2gwYy85NzU1Nzc4MzUxMTM0LmpwZ3w1N2Y0YmQzZTZiZGE5MjZlNWNmZjM2MDI4MmU3M2RmZTViZmExOWI0ZjYyZTE0MzZlOGNlODBkYjljMzY1NzNi",
      name: "boAt Flash RTL 3.3 cm (1.29 inch) Smart Watch with Customizable Watch Faces, Lightning Black",
      MRP: 21999,
      MRPx: "₹21,999",
      brand: "boAt",
      dealprice: 13999,
      dealpricex: "₹13,999",
      discount: 36,
      discountx: "36%",
      saveprice: 8000,
      savepricex: "₹8,000",
      cashback: "no",
      Reviews: 1789,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574195-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNDIxNXxpbWFnZS9qcGVnfGltYWdlcy9oZmEvaDk4Lzk3NTU3Nzg0MTY2NzAuanBnfDVlYzRiNzU2NTk3NTU2ZmZkNzBhNmZjOWYzYTViMzAxNGEzNjdmYmUxYzVlODQ3MDVjY2RkZDAyNGRiZWUyNzM",
      img2: "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574195-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMzQ0N3xpbWFnZS9qcGVnfGltYWdlcy9oMWIvaGIxLzk3NTU3NzkzOTk3MTAuanBnfDNhNDhiZjc1NDY4YjNkZjVjZmRlZTJmZDlmOTUxYTUyMDVjOGFjZWY2NjUxZGYxM2Q3Y2U4ZmQxZTlmOTVlZjc",
      img3: "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574195-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNTA2M3xpbWFnZS9qcGVnfGltYWdlcy9oYzcvaDgwLzk3NTU3ODAzODI3NTAuanBnfGIwOTRiODhkYTcyODQ3YWNiYTcyYzhhMThjZTI4YmQ0NzY0OTQ2NWNkZGRhZWVmOWQ3NmMwYmUwNzgwYzgwZTY",
      keyFeatures: [
        {
          one: "Smooth Flowy Touch, HD Display",
          two: "Superior quality strap, Honeycomb design",
          three: "Compatible with DA FIT App",
          four: "Supports Mic and Speaker",
          five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Watch Shape": "Watch Shape: Rectangle",
          Function:
            "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
          "Dial Shape": "Dial Shape: Rectangle",
          "Compatible Devices":
            "Compatible Devices: Smart Phones & Android Tablet",
          Description:
            "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
        },
      ],
    },
    {
      id: 37,
      imglink:
        "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzg1NDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDdlL2hlMy85ODE3NTExODIxMzQyLmpwZ3w3NDUzYzgzYzA4MWY2MTBlODk4Nzg5M2I2MjVjMTFiYjA1N2JkYmY1MDBiMjA2MzQyNjI3NzEwZmZkNjY5NjFi",
      name: "Fire-Boltt Ninja Pro Max Smart Watch, Black",
      MRP: 24999,
      MRPx: "₹24,999",
      brand: "Fire-Boltt",
      dealprice: 14999,
      dealpricex: "₹14,999",
      discount: 40,
      discountx: "40%",
      saveprice: 10000,
      savepricex: "₹10,000",
      cashback: "no",
      Reviews: 989,
      Star: 4,
      img1: "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjAyNnxpbWFnZS9qcGVnfGltYWdlcy9oNjYvaDNhLzk4MTc1MTE4ODY4NzguanBnfGYyMWMyNzJjNjQzOTE0YTY2OWRjZmQ3Y2NiY2UxMWViNWRlNDFkMWE5YzZiOGY1NjQzNzM0N2E2MmEyMTU3ZTI",
      img2: "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMTk0NHxpbWFnZS9qcGVnfGltYWdlcy9oN2UvaDk2Lzk4MTc1MTM1MjUyNzguanBnfDg1NDdkNDA1YWE4YjhmNjkzZTJkNzI3ZmVkMjc3Nzg3ZTlhOWE5ZWQ0YzNlNDExYjQ5ZGM3ZmQ3OGIwYjY0YzM",
      img3: "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMDI5NHxpbWFnZS9qcGVnfGltYWdlcy9oZjEvaDliLzk4MTc1MTQxODA2MzguanBnfGU1NDJjNWJjNDM0YjQwNmU5ZDBmMDI1Y2NmYjlmNzU2NzU2MDI5NzlhZjRmMzYyNGZkZDliZjQ3YzU0ZjUxYzY",
      keyFeatures: [
        {
          one: "Smooth Flowy Touch, HD Display",
          two: "Superior quality strap, Honeycomb design",
          three: "Compatible with DA FIT App",
          four: "Supports Mic and Speaker",
          five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Watch Shape": "Watch Shape: Rectangle",
          Function:
            "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
          "Dial Shape": "Dial Shape: Rectangle",
          "Compatible Devices":
            "Compatible Devices: Smart Phones & Android Tablet",
          Description:
            "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
        },
      ],
    },
    {
      id: 38,
      imglink:
        "https://www.reliancedigital.in/medias/Apple-MTF32HN-A-Smart-Watches-491488097-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NDY2MnxpbWFnZS9qcGVnfGltYWdlcy9oMGQvaGRjLzkxOTY1ODA5Mjk1NjYuanBnfGMxMGQxNDEwZTgwM2Y2YjI3NTBhN2QxZGE3YzRlMjM3MTBlN2UzOWE4ZTFiOWE0OWZlOGI2MzMyOThmYjlkZGE",
      name: "Apple Watch Series 3 GPS - 42 mm Space Grey Aluminium Case with Black Sport Band",
      MRP: 33999,
      MRPx: "₹33,999",
      brand: "Apple",
      dealprice: 26999,
      dealpricex: "₹26,999",
      discount: 21,
      discountx: "21%",
      saveprice: 7000,
      savepricex: "₹7,000",
      cashback: "Yes",
      Reviews: 79,
      Star: 2,
      img1: "https://www.reliancedigital.in/medias/Apple-MTF32HN-A-Smart-Watches-491488097-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTczfGltYWdlL2pwZWd8aW1hZ2VzL2g4YS9oNDQvOTE5NjU4MDk5NTEwMi5qcGd8M2I5MDRhNjM0NDdmNTcwNDA3MWVlNjhiNGUxNTg4NDI5YjQxNzcxZjFjYjFlZWQyZjRhZDQ2ZTA0ZjE5NDNmZA",
      img2: "https://www.reliancedigital.in/medias/Apple-MTF32HN-A-Smart-Watches-491488097-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNTE2fGltYWdlL2pwZWd8aW1hZ2VzL2hmNi9oMDUvOTE5NjU4MTMyMjc4Mi5qcGd8Y2U2MWM1Mjg2ZjQzNWMwNzYyZDBkOWFmYWI2ZmI0Zjg4YzZhOTllYmQ4MjhjMmIyNWFhMjJjYWI5NWMwNmE5OQ",
      img3: "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMDI5NHxpbWFnZS9qcGVnfGltYWdlcy9oZjEvaDliLzk4MTc1MTQxODA2MzguanBnfGU1NDJjNWJjNDM0YjQwNmU5ZDBmMDI1Y2NmYjlmNzU2NzU2MDI5NzlhZjRmMzYyNGZkZDliZjQ3YzU0ZjUxYzY",
      keyFeatures: [
        {
          one: "Smooth Flowy Touch, HD Display",
          two: "Superior quality strap, Honeycomb design",
          three: "Compatible with DA FIT App",
          four: "Supports Mic and Speaker",
          five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Watch Shape": "Watch Shape: Rectangle",
          Function:
            "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
          "Dial Shape": "Dial Shape: Rectangle",
          "Compatible Devices":
            "Compatible Devices: Smart Phones & Android Tablet",
          Description:
            "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
        },
      ],
    },
  ],
  soundbar: [
    {
      id: 41,
      imglink:
        "https://www.reliancedigital.in/medias/LG-SN4-Sound-Bar-492796654-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2Mzk4MXxpbWFnZS9qcGVnfGltYWdlcy9oN2QvaDQ5Lzk4MTY2NTE4NTc5NTAuanBnfDUxM2M0ZTEzMmZkM2NlMjY2OWVjNjE3NTkwNDA4MzcwMzA0MTBlZGY1MTZjYWU0ZWUyMmU2OWQyZDc0ZmQ5Yjk",
      name: "LG SN4 300 Watts 2.1 Channel Sound Bar",
      MRP: 22900,
      MRPx: "₹22,900",
      brand: "LG",
      dealprice: 15490,
      dealpricex: "₹15,490",
      discount: 32,
      discountx: "32%",
      saveprice: 7410,
      savepricex: "₹7,410",
      cashback: "yes",
      Reviews: 1599,
      Star: 4,
      img1: "https://www.reliancedigital.in/medias/LG-SN4-Sound-Bar-492796654-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMTkzMnxpbWFnZS9qcGVnfGltYWdlcy9oYWIvaDhjLzk4MTY2NTE5MjM0ODYuanBnfDM5NmYyODJiM2QzZWRmMTljMWVjN2UxNjgyMzhjMTc3MTNhZTYxZTBiYjlhODAzYTlmOGE3MGU0YjZlODZkM2E",
      img2: "https://www.reliancedigital.in/medias/LG-SN4-Sound-Bar-492796654-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMDk3OXxpbWFnZS9qcGVnfGltYWdlcy9oMDgvaDI5Lzk4MTY2NTIyNTExNjYuanBnfGE3N2Y1YWI5OGFhMThmYWQ2MDlhN2JjY2VjMTJlYjg1YjhkYTU4OGQwZTNiNTAyYzUzMThhODI0MjM2ZDRhYTI",
      img3: "https://www.reliancedigital.in/medias/LG-SN4-Sound-Bar-492796654-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMTEzMXxpbWFnZS9qcGVnfGltYWdlcy9oZTkvaGQwLzk4MTY2ODUzNDY4NDYuanBnfGQ5N2VjZThkYWMzMGZhODJmMjUyOWZhMmY1NDRmYjZiNTQ5NWFmYzI0ZWI0YjQyNzc5MTQxMTRhYTM4ZDgwN2Q",
      keyFeatures: [
        {
          one: "Carbon Woofer",
          two: "AI Sound Pro",
          three: "Wireless Subwoofer",
          four: "TV Sound Sync",
          five: "Bluetooth v4.0 Connectivity",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Wired/Wireless": "Wired/Wireless: Wired & Wireless",
          "Technology Used": "Technology Used: Dolby Digital",
          Bluetooth: "Bluetooth: 4",
          "Memory Card Slot": "Memory Card Slot: No",
          Description:
            "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
        },
      ],
    },
    {
      id: 42,
      imglink:
        "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0OTUyMXxpbWFnZS9qcGVnfGltYWdlcy9oMWEvaDVjLzk1MTQ2NjgwNjQ3OTguanBnfGNiYjI4OTYyMWM3MzMzNDc3NTI3ZmJiNTIxZGU0N2M5NWU3MDk0YjhmZmY4MGUyY2U1MTAyMTJkN2MzOWUwMGM",
      name: "Infinity (JBL) Cinebar W200 2.1 Channel Bluetooth Sound Bar with Wireless Sub Woofer (160W Peak Power, Deep Bass Output)",
      MRP: 19999,
      MRPx: "₹19,999",
      brand: "Infinity",
      dealprice: 15499,
      dealpricex: "₹15,499",
      discount: 23,
      discountx: "23%",
      saveprice: 4500,
      savepricex: "₹4,500",
      cashback: "Yes",
      Reviews: 339,
      Star: 2,
      img1: "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMDY2M3xpbWFnZS9qcGVnfGltYWdlcy9oMTMvaDMwLzk1MTQ2NjgxMzAzMzQuanBnfDUwM2JlZGQ3ODY1NDFkZjFkOTQ5ZTcyZTRhYjFmNmJjZjBiMWVmZDczYzYzYzIwYzVmYTE4MGEwODUyZWQwYzE",
      img2: "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMTg0N3xpbWFnZS9qcGVnfGltYWdlcy9oNmUvaGViLzk1MTQ2Njg0NTgwMTQuanBnfGU2NGI0Y2U2YjhjMWRkN2QyOWYyM2NiZjUyNTg4MTU4YzFjMDE5Njc5OWQyN2QwZGFlNjA3NzMzOWViYzM5NzY",
      img3: "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMTE1NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaDZlLzk1MTQ2Njg3ODU2OTQuanBnfDFkY2YwYTI1YTU2NjVlZDBhNWY1YTY2MTEyMjVmYmVmNmQ0YWQ5N2E4NmNkMzI0ZGExNTNjMmFhMTNkY2E0YTU",
      keyFeatures: [
        {
          one: "Carbon Woofer",
          two: "AI Sound Pro",
          three: "Wireless Subwoofer",
          four: "TV Sound Sync",
          five: "Bluetooth v4.0 Connectivity",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Wired/Wireless": "Wired/Wireless: Wired & Wireless",
          "Technology Used": "Technology Used: Dolby Digital",
          Bluetooth: "Bluetooth: 4",
          "Memory Card Slot": "Memory Card Slot: No",
          Description:
            "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
        },
      ],
    },
    {
      id: 43,
      imglink:
        "https://www.reliancedigital.in/medias/Sony-5-1-CH-Soundbar-Home-Theatre-S20R-Black-491666475-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzI0NDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY4L2hjMi85MzAxMjcwOTg2NzgyLmpwZ3xkNjU3MDhjYTk5N2U2YTlhNGZjYjI0NjlmNjM0ZDYwOTdiMmVjNWJlMzc0N2Q4Yzg5OWU2MWQ5MDk3ZjFmNWM1",
      name: "Sony HT-S20R 400 watts 5.1 Channel Dolby Digital Soundbar Home Theatre System(Bluetooth Connectivity,USB Connectivity)",
      MRP: 13990,
      MRPx: "₹13,990",
      brand: "FSony",
      dealprice: 9990,
      dealpricex: "₹9,990",
      discount: 57,
      discountx: "57%",
      saveprice: 4000,
      savepricex: "₹4,000",
      cashback: "no",
      Reviews: 935,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/Sony-5-1-CH-Soundbar-Home-Theatre-S20R-Black-491666475-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxODA5OHxpbWFnZS9qcGVnfGltYWdlcy9oMjYvaGMzLzkzMDEyNzEwNTIzMTguanBnfDc5ZjMxNmE2MzJjZTViYzE3ZDZlMTY4MGRjN2FlOGFiZTUxMzIxOWExOGE2NDJiOGQ4OTY3YTdlNzc1MDI5ZWM",
      img2: "https://www.reliancedigital.in/medias/Sony-5-1-CH-Soundbar-Home-Theatre-S20R-Black-491666475-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxODkzM3xpbWFnZS9qcGVnfGltYWdlcy9oNzIvaGFmLzkzMDEyNjg0MzA4NzguanBnfDFkYWU3N2Y2MDA0ZWE1NjQ4MTM0M2YyYzI1NTFkNTMxYWQ2YTk5YzgyMTA0ZjlhMWZiYTlkMjdmNjc2YjM3MDQ",
      img3: "https://www.reliancedigital.in/medias/Sony-5-1-CH-Soundbar-Home-Theatre-S20R-Black-491666475-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMzEwNHxpbWFnZS9qcGVnfGltYWdlcy9oYzMvaDRjLzkzMDEyNjk0MTM5MTguanBnfDMwNjkxZjE0MDU3NTM5MzE2NjNjY2IzYzhlYzZkMGU1NjA0NGE2ZjEwZjc3OTY0NGE5MTBjZTk2YzFmNDgwM2E",
      keyFeatures: [
        {
          one: "Carbon Woofer",
          two: "AI Sound Pro",
          three: "Wireless Subwoofer",
          four: "TV Sound Sync",
          five: "Bluetooth v4.0 Connectivity",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Wired/Wireless": "Wired/Wireless: Wired & Wireless",
          "Technology Used": "Technology Used: Dolby Digital",
          Bluetooth: "Bluetooth: 4",
          "Memory Card Slot": "Memory Card Slot: No",
          Description:
            "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
        },
      ],
    },
    {
      id: 44,
      imglink:
        "https://www.reliancedigital.in/medias/Samsung-HW-T420-XL-TV-Speakers-and-Soundbar-491891546-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MDM0MnxpbWFnZS9qcGVnfGltYWdlcy9oMmEvaGI4Lzk1MTUzOTQyMzY0NDYuanBnfDhiODE4ZjhmOGI5ZTdkNTBlODA5NjJkNTkyMTcwZTQ5ZDA2ZDRkNGU3ZTMyNTk0ZTBjNGQxYTI5ZGM2OGIxYzQ",
      name: "Samsung HW-T420/XL 2.1 Channel Sound bar",
      MRP: 18499,
      MRPx: "₹18,499",
      brand: "Samsung",
      dealprice: 11490,
      dealpricex: "₹11,490",
      discount: 38,
      discountx: "38%",
      saveprice: 7010,
      savepricex: "₹7,010",
      cashback: "no",
      Reviews: 333,
      Star: 5,
      img1: "https://www.reliancedigital.in/medias/Samsung-HW-T420-XL-TV-Speakers-and-Soundbar-491891546-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMDMxMnxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaGM5Lzk1MTUzOTQzMDE5ODIuanBnfGNkYzkxZDlkODc0MGY2OWVjOTVjZDE1YTk2YWQzNDZlYWYzODhhYzEwYmZmYTlhMGY2MmM2ZDA5OWNiYzc0OTc",
      img2: "https://www.reliancedigital.in/medias/Samsung-HW-T420-XL-TV-Speakers-and-Soundbar-491891546-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMDIxMnxpbWFnZS9qcGVnfGltYWdlcy9oYzUvaGNhLzk1MTUzOTQ5NTczNDIuanBnfGJkOWFkM2I5M2E1MGYyM2M3NWRmZGVhMTMwM2MzNTQ1ZWNkY2U0YjljZTRhY2JlYjE5N2MzMzQzOTUxMDQ4YjY",
      img3: "https://www.reliancedigital.in/medias/Samsung-HW-T420-XL-TV-Speakers-and-Soundbar-491891546-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMDE2NXxpbWFnZS9qcGVnfGltYWdlcy9oYTMvaGQ0Lzk1MTUzOTU5NDAzODIuanBnfDY3NmE4MWIyNmIxMmUxZDhlOTgyNzEyM2QzZTFlOWE4N2RkYTEyOGM3ZWEwNmE2YTc0MDRiMDM0NGZiYWZkYzU",
      keyFeatures: [
        {
          one: "Carbon Woofer",
          two: "AI Sound Pro",
          three: "Wireless Subwoofer",
          four: "TV Sound Sync",
          five: "Bluetooth v4.0 Connectivity",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Wired/Wireless": "Wired/Wireless: Wired & Wireless",
          "Technology Used": "Technology Used: Dolby Digital",
          Bluetooth: "Bluetooth: 4",
          "Memory Card Slot": "Memory Card Slot: No",
          Description:
            "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
        },
      ],
    },
    {
      id: 45,
      imglink:
        "https://www.reliancedigital.in/medias/Modget-MOG500BT-Soundbar-Black-492796534-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNjk3MjZ8aW1hZ2UvcG5nfGltYWdlcy9oMWIvaDg5Lzk4MDIxNTQ1MDgzMTgucG5nfDFjMGNjNzkyMGUwMGIyZGVkNDMzNGI1OWY5YjNhNTdjNzA5Y2VlNjU2MDMyYjcxMDc3MTYxMWViNzdhMmIzNWI",
      name: "MODGET 500BT 20W Wireless Bluetooth Soundbar with Built-in Microphone, Memory card ,USB, MP3 connectivity, Upto 8Hrs Playback",
      MRP: 39990,
      MRPx: "₹39,990",
      brand: "MODGET",
      dealprice: 24990,
      dealpricex: "₹24,990",
      discount: 38,
      discountx: "38%",
      saveprice: 10000,
      savepricex: "₹10,000",
      cashback: "no",
      Reviews: 548,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/Modget-MOG500BT-Soundbar-Black-492796534-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNDU3fGltYWdlL3BuZ3xpbWFnZXMvaGY1L2g1ZC85ODAyMTU0NTczODU0LnBuZ3wxMDcyZDZmNmEyNTQ3Mjk4NjBkMjViNWRkY2JiZmI3ODEyYzMwNTE3ZmNiNzliMTI5NWM5MjBkODY5Y2U4NTI2",
      img2: "https://www.reliancedigital.in/medias/Modget-MOG500BT-Soundbar-Black-492796534-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTMyNHxpbWFnZS9wbmd8aW1hZ2VzL2hlMC9oODUvOTgwMjE0OTk4NjMzNC5wbmd8Y2JjZjY4OTZlOGVhMDU4ZjRkZGRjN2NlMWE5OGQzYzQzOWI1MmI3YjRjMzY2MzRlZTFjY2I0NDY3OWQzZjE0Zg",
      img3: "https://www.reliancedigital.in/medias/Modget-MOG500BT-Soundbar-Black-492796534-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMDMyMHxpbWFnZS9wbmd8aW1hZ2VzL2gwYi9oNDkvOTgwMjE1MDk2OTM3NC5wbmd8OWNjMDU4ZDk1YjQwMjNmOWIzNmNlN2ZkZjc5NzBjOTM5ZjcwZDgwZDU0NDZiNzcxODg5YTA1ODljZjRmZjM2ZQ",
      keyFeatures: [
        {
          one: "Carbon Woofer",
          two: "AI Sound Pro",
          three: "Wireless Subwoofer",
          four: "TV Sound Sync",
          five: "Bluetooth v4.0 Connectivity",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Wired/Wireless": "Wired/Wireless: Wired & Wireless",
          "Technology Used": "Technology Used: Dolby Digital",
          Bluetooth: "Bluetooth: 4",
          "Memory Card Slot": "Memory Card Slot: No",
          Description:
            "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
        },
      ],
    },
    {
      id: 46,
      imglink:
        "https://www.reliancedigital.in/medias/JBL-SB130-TV-Speakers-and-Sound-bars-491431613-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzgwNDR8aW1hZ2UvanBlZ3xpbWFnZXMvaDFkL2g4MC85MTc1MTcwODA5ODg2LmpwZ3xmMjhhNzJlZDUxODFiMzYzZGExMTU4NjBhNTE3ZjVkOWYzN2MxNTY1Zjg0YmQ2NWRiZTUzYTNkMTk5Yzk4Zjlk",
      name: "JBL Cinema SB130 2.1 Channel Soundbar with Wired Subwoofer (110 Watts, Dolby Digital, Extra Deep Bass)",
      MRP: 21999,
      MRPx: "₹21,999",
      brand: "JBL",
      dealprice: 13999,
      dealpricex: "₹13,999",
      discount: 36,
      discountx: "36%",
      saveprice: 8000,
      savepricex: "₹8,000",
      cashback: "no",
      Reviews: 2568,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/JBL-SB130-TV-Speakers-and-Sound-bars-491431613-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMTc5fGltYWdlL2pwZWd8aW1hZ2VzL2g3YS9oYTAvOTE3NTE3MDg3NTQyMi5qcGd8NWI0MjA0NWM0Mzk4MWRiNjI3ODE2Y2NlMzdlM2ZiYWE2MDBiOTRhYWEzZWVlN2RlNmI5ZGNmNWYwMDY4MzMxOA",
      img2: "https://www.reliancedigital.in/medias/JBL-SB130-TV-Speakers-and-Sound-bars-491431613-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMjM4fGltYWdlL2pwZWd8aW1hZ2VzL2hhOS9oYTgvOTE3NTE3MTIwMzEwMi5qcGd8NGNkNWE2ODBlYmFkNzU0ZmEyYmQ2MWE3YTRlOWJjY2VlNGI4YzFhZjlmNjVlZWNjMWI1YmNhZTBlZGZjODBjYw",
      img3: "https://www.reliancedigital.in/medias/JBL-SB130-TV-Speakers-and-Sound-bars-491431613-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTcyfGltYWdlL2pwZWd8aW1hZ2VzL2hlMC9oMDkvOTE3NTE3MTg1ODQ2Mi5qcGd8OWNkYzUwYzA1N2NiNGRkYTIyNDRlM2JmNTIzNzU2NTU0MzY3ODY1MjFlYWYxYzdlMDYzYjNkY2MzYmU0ZTczZg",
      keyFeatures: [
        {
          one: "Carbon Woofer",
          two: "AI Sound Pro",
          three: "Wireless Subwoofer",
          four: "TV Sound Sync",
          five: "Bluetooth v4.0 Connectivity",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Wired/Wireless": "Wired/Wireless: Wired & Wireless",
          "Technology Used": "Technology Used: Dolby Digital",
          Bluetooth: "Bluetooth: 4",
          "Memory Card Slot": "Memory Card Slot: No",
          Description:
            "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
        },
      ],
    },
    {
      id: 47,
      imglink:
        "https://www.reliancedigital.in/medias/Samsung-A550-TV-Speakers-and-Soundbar-492338576-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MDc0MHxpbWFnZS9qcGVnfGltYWdlcy9oYTYvaGI2Lzk2MDkwNzk2NTIzODIuanBnfGJmMjI5OTBmM2Y5MGIzM2I4ZDQyMWZkMTVlN2ViNzg4NWFmNDA2Y2Q2Zjc3OGYzY2E4Y2MwZWNjZjgyYTc0MGQ",
      name: "Samsung A550 2.1 Channel Soundbar",
      MRP: 24999,
      MRPx: "₹24,999",
      brand: "Samsung",
      dealprice: 14999,
      dealpricex: "₹14,999",
      discount: 40,
      discountx: "40%",
      saveprice: 10000,
      savepricex: "₹10,000",
      cashback: "no",
      Reviews: 458,
      Star: 4,
      img1: "https://www.reliancedigital.in/medias/Samsung-A550-TV-Speakers-and-Soundbar-492338576-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNTEwNHxpbWFnZS9qcGVnfGltYWdlcy9oZGIvaGZkLzk2MDkwNzk3MTc5MTguanBnfDg4M2M3ZDk3MjQ4OGI1YzkzYzM3NTBhY2RlZjU3YzExMjhmNjRhODI4NzMwODgwYzk1NjQ5YTk5Mjk0OGQyYzg",
      img2: "https://www.reliancedigital.in/medias/Samsung-A550-TV-Speakers-and-Soundbar-492338576-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTM1NHxpbWFnZS9qcGVnfGltYWdlcy9oMGUvaGQ3Lzk2MDkwODEwMjg2MzguanBnfDg1MjViNmZiYzVkYWVkZGZmYzkxYzM1NGZhNWI3YWIwYzY2MWVkOTUxZTkyNzNhYWY2OWJkNTE4Mjk2ZWIzYmY",
      img3: "https://www.reliancedigital.in/medias/Samsung-A550-TV-Speakers-and-Soundbar-492338576-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNDEwMXxpbWFnZS9qcGVnfGltYWdlcy9oNzcvaDc2Lzk2MDkwODIwMTE2NzguanBnfDI3MTc4ZGEzYWFhMWY3NzQ3YTE2YzJkNDlmMDEwMDk2ZTc4YWJiZjA3MDlkMTFkMTI1NWYyZTY4ZDY5NDVmNjc",
      keyFeatures: [
        {
          one: "Carbon Woofer",
          two: "AI Sound Pro",
          three: "Wireless Subwoofer",
          four: "TV Sound Sync",
          five: "Bluetooth v4.0 Connectivity",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Wired/Wireless": "Wired/Wireless: Wired & Wireless",
          "Technology Used": "Technology Used: Dolby Digital",
          Bluetooth: "Bluetooth: 4",
          "Memory Card Slot": "Memory Card Slot: No",
          Description:
            "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
        },
      ],
    },
    {
      id: 48,
      imglink:
        "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0OTUyMXxpbWFnZS9qcGVnfGltYWdlcy9oMWEvaDVjLzk1MTQ2NjgwNjQ3OTguanBnfGNiYjI4OTYyMWM3MzMzNDc3NTI3ZmJiNTIxZGU0N2M5NWU3MDk0YjhmZmY4MGUyY2U1MTAyMTJkN2MzOWUwMGM",
      name: "Infinity (JBL) Cinebar W200 2.1 Channel Bluetooth Sound Bar with Wireless Sub Woofer (160W Peak Power, Deep Bass Output)",
      MRP: 19999,
      MRPx: "₹19,999",
      brand: "Infinity",
      dealprice: 15499,
      dealpricex: "₹15,499",
      discount: 23,
      discountx: "23%",
      saveprice: 4500,
      savepricex: "₹4,500",
      cashback: "Yes",
      Reviews: 639,
      Star: 3,
      img1: "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMDY2M3xpbWFnZS9qcGVnfGltYWdlcy9oMTMvaDMwLzk1MTQ2NjgxMzAzMzQuanBnfDUwM2JlZGQ3ODY1NDFkZjFkOTQ5ZTcyZTRhYjFmNmJjZjBiMWVmZDczYzYzYzIwYzVmYTE4MGEwODUyZWQwYzE",
      img2: "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMTg0N3xpbWFnZS9qcGVnfGltYWdlcy9oNmUvaGViLzk1MTQ2Njg0NTgwMTQuanBnfGU2NGI0Y2U2YjhjMWRkN2QyOWYyM2NiZjUyNTg4MTU4YzFjMDE5Njc5OWQyN2QwZGFlNjA3NzMzOWViYzM5NzY",
      img3: "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMTE1NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaDZlLzk1MTQ2Njg3ODU2OTQuanBnfDFkY2YwYTI1YTU2NjVlZDBhNWY1YTY2MTEyMjVmYmVmNmQ0YWQ5N2E4NmNkMzI0ZGExNTNjMmFhMTNkY2E0YTU",
      keyFeatures: [
        {
          one: "Carbon Woofer",
          two: "AI Sound Pro",
          three: "Wireless Subwoofer",
          four: "TV Sound Sync",
          five: "Bluetooth v4.0 Connectivity",
        },
      ],
      description: [
        {
          Display: "Display: Digital",
          Size: "Size: 4.29 cm (1.69 inch)",
          "Wired/Wireless": "Wired/Wireless: Wired & Wireless",
          "Technology Used": "Technology Used: Dolby Digital",
          Bluetooth: "Bluetooth: 4",
          "Memory Card Slot": "Memory Card Slot: No",
          Description:
            "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
        },
      ],
    },
  ],
};
localStorage.setItem("productCategories", JSON.stringify(productCategories));

// product data store to local-storage
let products = [
  {
    id: 1,
    imglink:
      "https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDk1NnxpbWFnZS9qcGVnfGltYWdlcy9oNDcvaDE3Lzk4NDIyMDUxMzA3ODIuanBnfDljNDA4NjY5ZmYwYjNmMTBlMmYwZGEwODNkMTk5M2ZkMDc5MTgzZTAyY2VmNWYwMjJmYWNlZmEwNzBkNmYyZjI",
    name: "Samsung Wondertainment 80 cm (32 Inch) Smart HD Ready TV, UA32T4340BKXXL",
    MRP: 22900,
    MRPx: "₹22,900",
    brand: "Samsung",
    dealprice: 15490,
    dealpricex: "₹15,490",
    discount: 32,
    page: 1,
    discountx: "32%",
    saveprice: 7410,
    savepricex: "₹7,410",
    cashback: "yes",
    Reviews: 15,
    Star: 5,
    img1: "https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w0MjIzfGltYWdlL2pwZWd8aW1hZ2VzL2gwMy9oNWIvOTg0MjIwNDk5OTcxMC5qcGd8MmMwNTYzMjViMjE3OTRiM2I4MTBjYzJkMmJmNzA0ODk2MDI1Mzc3ZjUwYjc0OTg2YmFiNDM5YjEwMWI0ZTYwMQ",
    img2: "https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzMwMzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDNhL2hmNS85ODQyMjAyOTY4MDk0LmpwZ3w3NTcyOWEzMTA2ZTYxN2I2MjUzMWEwMmExYmQ4YTMxNWRlMGNhN2Y3ZWQ3NzFhYmJjMzU2N2Q4YmZjOTY4NDQz",
    img3: "https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMDEyNDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDE2L2hhYi85ODQyMjAzMjk1Nzc0LmpwZ3w2MmQ4NjU5YjQxOWRhMGM1M2M5OWI2ZTZjNDc5ODA0YjIwNmQ3OWQzMjNlYjQwN2U4ZTc0YzQxNjk2ZDJkZWE2",
    keyFeatures: [
      {
        one: "Operating System: Tizen",
        two: "Resolution: 1366 x 768 (HD)",
        three: "Connectivity: 2 HDMI & 2 USB Ports",
        four: "Sound Output (RMS): 20 Watt",
        five: "Refresh Rate: 60 Hz",
      },
    ],
    description: [
      {
        one: "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
        two: "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
        three: "20 Watts Output | Dolby Digital Plus",
        four: " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
        five: " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
        six: "Wi-Fi, USB, Ethernet, HDMI",
        seven:
          "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
      },
    ],
  },
  {
    id: 2,
    imglink:
      "https://www.reliancedigital.in/medias/ONEPLUS-32Y1-TV-491895010-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjIzMXxpbWFnZS9qcGVnfGltYWdlcy9oNjkvaDE0Lzk4MTAwNTg5MDM1ODIuanBnfGFiZjk3NDA1MzY1ODQwYjc2OTZkMzY4OTI1Y2RmOWM3OTI4NTE1MTlkMDFlOTUwYmZkM2U5MTVlYmIyZGFlYzg",
    name: "ONEPLUS 81.28 cm (32 inch) HD Smart LED TV, 32Y1",
    MRP: 19999,
    MRPx: "₹19,999",
    brand: "Oneplus",
    dealprice: 15499,
    dealpricex: "₹15,499",
    discount: 23,
    feature: "Wi-Fi",
    page: 1,
    discountx: "23%",
    tvops: "Tizen",
    saveprice: 4500,
    savepricex: "₹4,500",
    cashback: "Yes",
    Reviews: 10,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/ONEPLUS-32Y1-TV-491895010-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjEzMzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGI4L2gyZC85ODEwMDU4NzA2OTc0LmpwZ3w2Yzg5YmJmZWM4NTdhYmY1MDA0OWRkYTFlZTA0ZWM1MzNkYjA4NzNmZDliZWFkYzg2ZWIyZmE5MmE4YjBjNzc3",
    img2: "https://www.reliancedigital.in/medias/ONEPLUS-32Y1-TV-491895010-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MDMyODF8aW1hZ2UvanBlZ3xpbWFnZXMvaDM2L2hkZi85ODEwNjIxODkwNTkwLmpwZ3w5ZDEzYzkwMzQzYmFlMTg0NjRkMzY2NGY1OTUxODEyMjY4OGQzYzU0ZmNiYjczODcwNDc1ZDBjYzZmZmM5NWI3",
    img3: "https://www.reliancedigital.in/medias/ONEPLUS-32Y1-TV-491895010-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjg5MDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGYxL2gyYy85ODEwNjIyNTQ1OTUwLmpwZ3xkNGNiOWJkNTJjNmU3MzVhN2VjNDRjYWVjNjIwYjQzMzE0YTNjMGQ4MzNhYTEyMWZkYzBmMGY4NWY1ODE3YzBl",
    keyFeatures: [
      {
        one: "Operating System: Tizen",
        two: "Resolution: 1366 x 768 (HD)",
        three: "Connectivity: 2 HDMI & 2 USB Ports",
        four: "Sound Output (RMS): 20 Watt",
        five: "Refresh Rate: 60 Hz",
      },
    ],
    description: [
      {
        one: "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
        two: "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
        three: "20 Watts Output | Dolby Digital Plus",
        four: " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
        five: " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
        six: "Wi-Fi, USB, Ethernet, HDMI",
        seven:
          "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
      },
    ],
  },
  {
    id: 3,
    imglink:
      "https://www.reliancedigital.in/medias/TCL-D311T-LED-492572945-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODgwN3xpbWFnZS9qcGVnfGltYWdlcy9oMWEvaGE3Lzk4MzE2NzY5MzYyMjIuanBnfGE5M2ZlNmIyNDdkY2EwODAyMDIzYmJhN2E5NzU3MmRlZmUxNGMwYmFkNzA2M2RkYWE3NmNjYWJmMmNhMzE4MjM",
    name: "TCL 81.28 cm (32 inch) 2Yr Warranty HD LED TV, D311T Series, 32D311T",
    MRP: 13990,
    MRPx: "₹13,990",
    brand: "TCL",
    page: 1,
    dealprice: 9990,
    dealpricex: "₹9,990",
    discount: 57,
    discountx: "57%",
    feature: "Wi-Fi",
    saveprice: 4000,
    savepricex: "₹4,000",
    cashback: "no",
    tvops: "Tizen",
    Reviews: 5,
    Star: 5,
    img1: "https://www.reliancedigital.in/medias/TCL-D311T-LED-492572945-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNTYyMjd8aW1hZ2UvanBlZ3xpbWFnZXMvaDNiL2hlOS85ODMxNjc2NzM5NjE0LmpwZ3w5M2Q1ZTlhZTc1YjNkMzVjOTM1YTExZDhlYmUxNGZlZDU4MzIzZDNhYjQzODRkMzI3M2ZkZTdmZTQ3MGEwNWUw",
    img2: "https://www.reliancedigital.in/medias/TCL-D311T-LED-492572945-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjM4MzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGJhL2gwOS85ODMxNjc0NzczNTM0LmpwZ3wxMTAzMzE3OWQ2M2ZiYzBkMmJmOGMwODk3NWNiMmViNTBkYjEyMDFiYmRhMTc2YjBmMmM2M2M3YzFiNDNhYWQw",
    img3: "https://www.reliancedigital.in/medias/TCL-D311T-LED-492572945-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxOTY4OTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDIyL2hhZC85ODMxNjc1MTAxMjE0LmpwZ3wwNmUzNGRiZGI2YzJjNmZmNjE4OTAzZDEzMjMxMzQ0NDlkZjkxOWU0MTE1NmRjZWJjOTBmMjI0NzhkNzliZjdk",
    keyFeatures: [
      {
        one: "Operating System: Tizen",
        two: "Resolution: 1366 x 768 (HD)",
        three: "Connectivity: 2 HDMI & 2 USB Ports",
        four: "Sound Output (RMS): 20 Watt",
        five: "Refresh Rate: 60 Hz",
      },
    ],
    description: [
      {
        one: "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
        two: "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
        three: "20 Watts Output | Dolby Digital Plus",
        four: " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
        five: " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
        six: "Wi-Fi, USB, Ethernet, HDMI",
        seven:
          "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
      },
    ],
  },
  {
    id: 4,
    imglink:
      "https://www.reliancedigital.in/medias/Kodak-32HDX7XPRO-Television-492166141-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MzcxOHxpbWFnZS9qcGVnfGltYWdlcy9oNGUvaGI4Lzk1MTE0NzEzNDk3OTAuanBnfDE3MTQ4OGE5OWIzNWUwNjRkZDE0OTRkNTM3MDhjZTAwOGVjYTc4OWZjNzQ0MTdhNzczYzQ5ZTgyYWE2ODRlYzI",
    name: "Kodak 80 cm (32 inch) HD Ready LED Smart TV, 7XPRO Series 32HDX7XPRO, Quad Core Processor, Built-in Chromecast",
    MRP: 18499,
    MRPx: "₹18,499",
    brand: "Kodak",
    dealprice: 11490,
    dealpricex: "₹11,490",
    discount: 38,
    page: 1,
    discountx: "38%",
    saveprice: 7010,
    savepricex: "₹7,010",
    cashback: "no",
    feature: "HDR",
    tvops: "Tizen",
    Reviews: 12,
    Star: 2,
    img1: "https://www.reliancedigital.in/medias/Kodak-32HDX7XPRO-Television-492166141-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MDgyNzF8aW1hZ2UvanBlZ3xpbWFnZXMvaDI3L2hiMy85NTExNDcxMTUzMTgyLmpwZ3w3NWQ4ZWI4NjhmNmRhZDZjZTRjMTM1YzNhM2YyZjkzMWE5NjM3NzQzZGNiNWE1YWI0MzJjODYxMzMyMzMxNGY3",
    img2: "https://www.reliancedigital.in/medias/Kodak-32HDX7XPRO-Television-492166141-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzOTgxODd8aW1hZ2UvanBlZ3xpbWFnZXMvaGI3L2gwZC85NTExNDcyNDYzOTAyLmpwZ3xmNjAwMzg0ODZlMzI2NTQxYWMwZjQ3ZDFiNmI5ZDljNDYwNGQ3MDIzNWZmNjViY2VkMzk4ODI4OTZmYzA1MzEw",
    img3: "https://www.reliancedigital.in/medias/Kodak-32HDX7XPRO-Television-492166141-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1MzUxMnxpbWFnZS9qcGVnfGltYWdlcy9oMTEvaGI4Lzk1MTE0NzM0NDY5NDIuanBnfDE2NTY0ZDFmOGRjZDM4NzM4MDMwMDEzZjFiZGFkNzc1OTE1ZTc2MmFkYmM2MmY3ZGQxODU1MjVhNTk0NDZjMWI",
    keyFeatures: [
      {
        one: "Operating System: Tizen",
        two: "Resolution: 1366 x 768 (HD)",
        three: "Connectivity: 2 HDMI & 2 USB Ports",
        four: "Sound Output (RMS): 20 Watt",
        five: "Refresh Rate: 60 Hz",
      },
    ],
    description: [
      {
        one: "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
        two: "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
        three: "20 Watts Output | Dolby Digital Plus",
        four: " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
        five: " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
        six: "Wi-Fi, USB, Ethernet, HDMI",
        seven:
          "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
      },
    ],
  },
  {
    id: 5,
    imglink:
      "https://www.reliancedigital.in/medias/Toshiba-43U5050-Televisions-491893300-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NDc0MXxpbWFnZS9wbmd8aW1hZ2VzL2g3My9oZGIvOTgyMDI0ODYzNzQ3MC5wbmd8NTY1YjYwYjViNGQ4OGFhYjU2Y2FmMzhiZmFhNmRkZmViNGIzNTIxY2FlNTQ2OTQ0OTQxNTFjMzc4NTE3MDQwNQ",
    name: "Toshiba 108 cm (43 inch) 4K Ultra HD Vidaa OS Smart LED TV with Dolby Vision and ATMOS, 43U5050",
    MRP: 39990,
    MRPx: "₹39,990",
    brand: "Toshiba",
    dealprice: 24990,
    dealpricex: "₹24,990",
    discount: 38,
    page: 1,
    discountx: "38%",
    saveprice: 10000,
    savepricex: "₹10,000",
    cashback: "no",
    feature: "HDR",
    tvops: "Linux",
    Reviews: 8,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/Toshiba-43U5050-Televisions-491893300-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MTM4MTF8aW1hZ2UvcG5nfGltYWdlcy9oODYvaDI4Lzk4MjAyNDg0NDA4NjIucG5nfGJkN2ZmYmQxYjNmNzY5ZjJmNjc5ZDJkNmM2ZDMyM2ViMGIzN2FjMTJlNDczMTA2ZDQ0NDBkZWRmMWM3MWQ2Y2M",
    img2: "https://www.reliancedigital.in/medias/Toshiba-43U5050-Televisions-491893300-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDQ5NzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGU2L2g4My85NDAyNjQzNDQ3ODM4LmpwZ3w1OTRkODI2YmUzMThmY2YwZGQ4MDI5OWJiYTdmODQ3Yzk3OTkxYjlmYmJkMzM1NTk0MGM2NjZlMTZmODIzODFj",
    img3: "https://www.reliancedigital.in/medias/Toshiba-43U5050-Televisions-491893300-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMTUxOTl8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2g4Yy85NDAyNjQ1MDg2MjM4LmpwZ3xiOGQzMjE1MzgxZGVhMWQ3ZGQ5MzVmNGJmYjU0ZjIxODc2YTQ0MWFiNWU4NDAxZmYzOGIwNTlkZGE2ZjMyYjJh",
    keyFeatures: [
      {
        one: "Operating System: Tizen",
        two: "Resolution: 1366 x 768 (HD)",
        three: "Connectivity: 2 HDMI & 2 USB Ports",
        four: "Sound Output (RMS): 20 Watt",
        five: "Refresh Rate: 60 Hz",
      },
    ],
    description: [
      {
        one: "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
        two: "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
        three: "20 Watts Output | Dolby Digital Plus",
        four: " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
        five: " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
        six: "Wi-Fi, USB, Ethernet, HDMI",
        seven:
          "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
      },
    ],
  },
  {
    id: 6,
    imglink:
      "https://www.reliancedigital.in/medias/Realme-Neo-LED-Televisions-492796729-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NjQ3OXxpbWFnZS9wbmd8aW1hZ2VzL2gzOS9oY2MvOTgwODU0Njc5MTQ1NC5wbmd8N2UzMTIyZjI0MTI1YzQxMGNmNTRmZGZmOTM4Y2ZjZWNkMmU1YWVlN2MyZDdkYmNmOTU0ZjhiYjNhYzQzZDJhZQ",
    name: "Realme 80 cm (32 inch) HD LED Smart TV, Neo",
    MRP: 21999,
    MRPx: "₹21,999",
    brand: "Realme",
    dealprice: 13999,
    dealpricex: "₹13,999",
    page: 1,
    discount: 36,
    discountx: "36%",
    saveprice: 8000,
    savepricex: "₹8,000",
    cashback: "no",
    feature: "HDR",
    USB: 2,
    tvops: "Linux",
    Reviews: 20,
    Star: 5,
    img1: "https://www.reliancedigital.in/medias/Realme-Neo-LED-Televisions-492796729-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTU0MDh8aW1hZ2UvcG5nfGltYWdlcy9oYTUvaGYxLzk4MDg1NDY1OTQ4NDYucG5nfDEyMDAzMmExNTJlZTc5ZDI4YjdkNDgzNWRhMzJjNzMyMmY5NmRiMTkzYTQwNjEzNjVkMjE5NTRjYTk1YzAzZDk",
    img2: "https://www.reliancedigital.in/medias/Realme-Neo-LED-Televisions-492796729-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxOTY0MTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDlkL2g1ZC85ODA4NTQzOTczNDA2LmpwZ3xkMmQ0YTM5NTE3MDU3MmI0MWNjYjZkYThiZmM5OWY0MmJlYmI2Y2NmZjJlZDUzOGQ0NDQwNWIxYjJmZmZmZGEx",
    img3: "https://www.reliancedigital.in/medias/Realme-Neo-LED-Televisions-492796729-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjU4ODB8aW1hZ2UvanBlZ3xpbWFnZXMvaGNlL2hjYy85ODA4NTQ0MzAxMDg2LmpwZ3xmN2YzNTEzYmQ2MjgyOTAxOWYyZjUzMzU2ZjUwOWQwNGY2MmQzNDQ4M2YyZTg1MWNmMzIxZDhiYmFmOWI5ZjUy",
    keyFeatures: [
      {
        one: "Operating System: Tizen",
        two: "Resolution: 1366 x 768 (HD)",
        three: "Connectivity: 2 HDMI & 2 USB Ports",
        four: "Sound Output (RMS): 20 Watt",
        five: "Refresh Rate: 60 Hz",
      },
    ],
    description: [
      {
        one: "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
        two: "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
        three: "20 Watts Output | Dolby Digital Plus",
        four: " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
        five: " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
        six: "Wi-Fi, USB, Ethernet, HDMI",
        seven:
          "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
      },
    ],
  },
  {
    id: 7,
    imglink:
      "https://www.reliancedigital.in/medias/Xiaomi-ELA4701IN-Televisions-492571689-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4NzQyMnxpbWFnZS9qcGVnfGltYWdlcy9oZjUvaDZmLzk2OTE2NjA0NTE4NzAuanBnfDA0NzYyMTg0OTQ4ZWZhYTMyM2Y1MTdiNmFhYmQ4MDczYjM1OTA0OTY4MDYwYWZmZjYzMTljMmZhYTFkZjMyYmY",
    name: "Redmi 80 cm (32 inch) HD Smart LED ELA4915/4732/01IN",
    MRP: 24999,
    MRPx: "₹24,999",
    brand: "redmi",
    dealprice: 14999,
    dealpricex: "₹14,999",
    discount: 40,
    page: 1,
    discountx: "40%",
    saveprice: 10000,
    savepricex: "₹10,000",
    cashback: "no",
    feature: "HDMI",
    tvops: "Linux",
    Reviews: 235,
    Star: 5,
    img1: "https://www.reliancedigital.in/medias/Xiaomi-ELA4701IN-Televisions-492571689-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MTQ4MTJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGYxL2g3Zi85NjkxNjYwMjU1MjYyLmpwZ3wzZjRhNGVjNTk5YjEzYzNmNjkzNmIzOGY2YmYyY2VhNzM1YjgyZGY1NDMzNzAwY2U4NmM0NjgyNTFmMjJmY2M4",
    img2: "https://www.reliancedigital.in/medias/Xiaomi-ELA4701IN-Televisions-492571689-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNTc1OTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDAyL2gzOS85NjkxNjYxODkzNjYyLmpwZ3wxMGVhNzNiMDNjODlmOWQ0NTNhMGJjODI3NGY3M2ZkZDU3ZDA5NmRjNDVjYjg5MWUxYzRhYmZkODNhNTkxMWUy",
    img3: "https://www.reliancedigital.in/medias/Xiaomi-ELA4701IN-Televisions-492571689-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNTc1OTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDAyL2gzOS85NjkxNjYxODkzNjYyLmpwZ3wxMGVhNzNiMDNjODlmOWQ0NTNhMGJjODI3NGY3M2ZkZDU3ZDA5NmRjNDVjYjg5MWUxYzRhYmZkODNhNTkxMWUy",
    keyFeatures: [
      {
        one: "Operating System: Tizen",
        two: "Resolution: 1366 x 768 (HD)",
        three: "Connectivity: 2 HDMI & 2 USB Ports",
        four: "Sound Output (RMS): 20 Watt",
        five: "Refresh Rate: 60 Hz",
      },
    ],
    description: [
      {
        one: "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
        two: "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
        three: "20 Watts Output | Dolby Digital Plus",
        four: " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
        five: " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
        six: "Wi-Fi, USB, Ethernet, HDMI",
        seven:
          "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
      },
    ],
  },
  {
    id: 8,
    imglink:
      "https://www.reliancedigital.in/medias/ONEPLUS-43Y1S-EDGE-SMART-LED-TV-492796557-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MzIyMHxpbWFnZS9qcGVnfGltYWdlcy9oZTkvaDI4Lzk3Nzg1NjMzMTc3OTAuanBnfGYwZTJhZWZhNTdjMzc2MTIwZGFmNzEwYmI1YzEwOWY1NGMzMGE0ZWZkNGJlNTUyMWMwODY3MzkwNGI3OTk1ZWM",
    name: "OnePlus 108 cm (43 inch) Full HD Android Smart LED TV with Dolby Audio Surround Sound Technology, 43Y1S Edge",
    MRP: 33999,
    MRPx: "₹33,999",
    brand: "Oneplus",
    dealprice: 26999,
    dealpricex: "₹26,999",
    discount: 21,
    page: 1,
    discountx: "21%",
    saveprice: 7000,
    savepricex: "₹7,000",
    cashback: "Yes",
    feature: "HDMI",
    tvops: "Linux",
    Reviews: 150,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODYzOTV8aW1hZ2UvanBlZ3xpbWFnZXMvaGFlL2gzOC85ODEwMDU4Mzc5Mjk0LmpwZ3wwYWE2Y2UzOTE3MzU3ODI0ZjJmZjhkZGVmZTVkNzc3ODlmNzIwMjQ3N2U0ZWViMzFmOGYxMmYxZWNiZGM2NGUx",
    img2: "https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0ODY1Mjd8aW1hZ2UvanBlZ3xpbWFnZXMvaDIxL2g4Yi85ODEwNjIyMjE4MjcwLmpwZ3wwYzlkODBmOTZhOTc3ZTU0YjQ2ODQ5ZWY4MjE0ZWJjN2YzZmE2YmMyYmUxYWRhZWZjNjgyODhkMWNhYTQ2OTVk",
    img3: "https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMTgxMDd8aW1hZ2UvanBlZ3xpbWFnZXMvaDg3L2g3Yy85ODEwNjIyODczNjMwLmpwZ3w2MTcxN2ExMzNiNGFkMjhiMGVlMzc5MDBhMjdhZDgwNmI1Y2E1N2RlYTFjMGMxMzA2YTM2YzI2NGMzYWNjMGQ2",
    keyFeatures: [
      {
        one: "Operating System: Tizen",
        two: "Resolution: 1366 x 768 (HD)",
        three: "Connectivity: 2 HDMI & 2 USB Ports",
        four: "Sound Output (RMS): 20 Watt",
        five: "Refresh Rate: 60 Hz",
      },
    ],
    description: [
      {
        one: "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
        two: "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
        three: "20 Watts Output | Dolby Digital Plus",
        four: " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
        five: " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
        six: "Wi-Fi, USB, Ethernet, HDMI",
        seven:
          "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
      },
    ],
  },
  {
    id: 9,
    imglink:
      "https://www.reliancedigital.in/medias/Karbonn-KJW24NSHD-LED-TV-492403972-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzc5NXxpbWFnZS9qcGVnfGltYWdlcy9oMGEvaDRlLzk4Mzg5NTY0MTI5NTguanBnfGZjYTUwNWZlN2U1NGQxZmI0YTljMWQ4ZjExMTY4YjlkOThlZDBiZDAxMGMyNWU0YjlmNmZjODliZGQ2YTk4YmY",
    name: "Karbonn 60 cm (24 inch) HD Ready LED TV, Millenium Series KJW24NSHD",
    MRP: 11990,
    MRPx: "₹11,990",
    brand: "Karbonn",
    dealprice: 6990,
    dealpricex: "₹6,990",
    discount: 42,
    page: 1,
    discountx: "42%",
    saveprice: 5000,
    savepricex: "₹5,000",
    cashback: "no",
    feature: "HDMI",
    tvops: "Linux",
    Reviews: 525,
    Star: 5,
    img1: "https://www.reliancedigital.in/medias/Karbonn-KJW24NSHD-LED-TV-492403972-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4NTYzMnxpbWFnZS9qcGVnfGltYWdlcy9oYmQvaGJmLzk4Mzg5NTYyMTYzNTAuanBnfDYzOWJlZWI3MjVlODU4NWQ0NmNmNDQ4NzExZmNmNjU4NzljMjM1Nzk3NjA3MWRhOWQ2ZWNmZmU4ZTA3Y2IwZTA",
    img2: "https://www.reliancedigital.in/medias/Karbonn-KJW24NSHD-LED-TV-492403972-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODYwNTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDI4L2g3MC85ODM4OTU2NTQ0MDMwLmpwZ3wzZTBiNDNkOGEwMDVmMzRhZWU4MDYzNjc0YTZkYzAxNTIxMjhmY2I2YjVhMzFhNjg2MzlkMzdiYjIzNjY3OTQ5",
    img3: "https://www.reliancedigital.in/medias/Karbonn-KJW24NSHD-LED-TV-492403972-i-3-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjE0MDN8aW1hZ2UvanBlZ3xpbWFnZXMvaDU4L2hjZS85ODM4OTU2ODcxNzEwLmpwZ3w5ZDM1Mjk0MzIyNWE3NjU1MmFlZDE3MDMzYzBiOGI1MzVhYjhlNGYzYTFiYmMwOWQyNGY2Zjg4MmI5ODJkOGQ1",
    keyFeatures: [
      {
        one: "Operating System: Tizen",
        two: "Resolution: 1366 x 768 (HD)",
        three: "Connectivity: 2 HDMI & 2 USB Ports",
        four: "Sound Output (RMS): 20 Watt",
        five: "Refresh Rate: 60 Hz",
      },
    ],
    description: [
      {
        one: "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
        two: "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
        three: "20 Watts Output | Dolby Digital Plus",
        four: " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
        five: " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
        six: "Wi-Fi, USB, Ethernet, HDMI",
        seven:
          "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
      },
    ],
  },
  {
    id: 10,
    imglink:
      "https://www.reliancedigital.in/medias/LG-32LM562BPTA-Televisions-492338698-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w5NDEyMnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDY3Lzk2MDU1NDcwMzI2MDYuanBnfDM1MWQzMTEzYmEyYWY2MGI0OTViYjJjZmNmNGMxZTUzZTViNTJiOTQ0MmY2ODg1ZDgwOWZhYjdmZmNiNGNkZmU",
    name: "LG 81.28 cm (32 inch) HD LED Smart TV, 32LM562BPTA",
    MRP: 20990,
    MRPx: "₹20,990",
    brand: "LG",
    dealprice: 16490,
    dealpricex: "₹16,490",
    discount: 21,
    discountx: "21%",
    page: 1,
    saveprice: 4500,
    savepricex: "₹4,500",
    cashback: "no",
    feature: "ScheduleRecording",
    tvops: "VIDAA",
    Reviews: 512,
    Star: 5,
    img1: "https://www.reliancedigital.in/medias/LG-32LM562BPTA-Televisions-492338698-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMTg4N3xpbWFnZS9qcGVnfGltYWdlcy9oZjIvaDNkLzk2MDU1NDY5MDE1MzQuanBnfGYxNGQyYjIzMTkwMzNkMGQ3YWU5OWVmMDFjMTdkZmNhMmMxYjA3ZDFlODA5MTNkMTVkNGIyYTU5MjFjNzYyMWQ",
    img2: "https://www.reliancedigital.in/medias/LG-32LM562BPTA-Televisions-492338698-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNTA0MHxpbWFnZS9qcGVnfGltYWdlcy9oYTQvaDA1Lzk2MDU1NDA5Mzc3NTguanBnfDU5N2RmOThiZmNkYjk3YTViODdiODgzOTRiZjUzMTBjMzgzYjEwNWRhMzdhYjU5ODYyMjhlY2Q0MDM2ODQ4Y2Q",
    img3: "https://www.reliancedigital.in/medias/LG-32LM562BPTA-Televisions-492338698-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMzY1NXxpbWFnZS9qcGVnfGltYWdlcy9oOTMvaGFkLzk2MDU1NDE1OTMxMTguanBnfGZmNzhlN2UxNDViY2U3ODY3Y2NkNTMxZmZiNjc4NmI4NGEyYjVkNjE4MzJjNzI0MWQyNzMxYWI0NDRjMGUxZmU",
    keyFeatures: [
      {
        one: "Operating System: Tizen",
        two: "Resolution: 1366 x 768 (HD)",
        three: "Connectivity: 2 HDMI & 2 USB Ports",
        four: "Sound Output (RMS): 20 Watt",
        five: "Refresh Rate: 60 Hz",
      },
    ],
    description: [
      {
        one: "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",
        two: "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",
        three: "20 Watts Output | Dolby Digital Plus",
        four: " Smart TV Features : Personal Computer | Screen Share | Music System | Content Guide | Connect Share Movie",
        five: " LED Panel | Mega Contrast | PurColor | HD Picture Quality | Slim & Stylish Design",
        six: "Wi-Fi, USB, Ethernet, HDMI",
        seven:
          "Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs. The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home. Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.",
      },
    ],
  },
  {
    id: 11,
    imglink:
      "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDg2MnxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaGI0Lzk4NDkyMzg2NTA5MTAuanBnfDY1ZTdjNmUxYzdiMDczOThhZDMzYjBlZGE1MmZlYTE5ZDZhOGNhZGEzYTU2NDk5YWQ5ODgxMTY4NjA3OTI4ZDE",
    name: "Lenovo 7KIN IdeaPad Slim 3i Laptop (Intel Celeron N4020/4GB/256GB/ Windows 11/MSO/HD), 35.56 cm (14 inch)",
    MRP: 40490,
    MRPx: "₹40,490",
    brand: "Lenovo",
    dealprice: 28980,
    dealpricex: "₹28,980",
    discount: 28,
    discountx: "28%",
    saveprice: 11510,
    savepricex: "₹11,510",
    cashback: "no",
    Reviews: 2565,
    Star: 4,
    img1: "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTE2fGltYWdlL2pwZWd8aW1hZ2VzL2g5ZC9oZWEvOTg0OTIzODUxOTgzOC5qcGd8MWRlMzc2NmUwOGE4MWE4MjZmOWQ1NmViOTk4NDg1ODMwNTlmYzlkYTg5NjkwODkyMmZjOTc4NThhNTYxZWEwYg",
    img2: "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTE4NHxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDY4Lzk4NDkyMjg2MjM5MDIuanBnfGViOWQ0YmIzZjU5MWQwYTIxYzQzMTVjMDg3NjM2OWNkNWYwYmYyMzY5NjRhZTc5MjhmY2E4ZWViNGJjMTcwZDQ",
    img3: "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxODA4M3xpbWFnZS9qcGVnfGltYWdlcy9oMTgvaGVkLzk4NDkyMjk2MDY5NDIuanBnfDgyOGJhMTZiOTk2YWE3Y2VkZmU5NTkzMDk0NWI2ZDIwZTRhOWExMjgyZGE1NzU0YjRlOGIxYjJjNmJlYTFlMjQ",
    keyFeatures: [
      {
        one: "Processor: Intel Celeron N4020 Processor",
        two: "RAM: 4 GB",
        three: "Internal Storage: 256 GB",
        four: "Storage Type : SSD",
        five: "Operating System: Windows 11 Home",
      },
    ],
    description: [
      {
        one: "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
        two: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
        three: "Pre-Installed: MS Office Home and Student 2021",
        four: " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
        five: "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
        six: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
        seven:
          "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
      },
    ],
  },
  {
    id: 12,
    imglink:
      "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4OTU2OXxpbWFnZS9qcGVnfGltYWdlcy9oMGYvaGYwLzk4MjQ0MzUyNzM3NTguanBnfGQ5NzFkOGZkMjQyNjc1YzVkOGYzNGM0YmJjYmY3NTY2MWI0NTZkMTA2NjgwODQxZGEwMmZlNzU1ZjU3ZWZmYjQ",
    name: "HP 15s-fq4022TU Laptop (11th Gen-Intel Core i5-1155G7/8GB/512GB SSD + 32GB Intel Optane Memory/Intel Iris Xe Graphics/Windows 11/MSO/FHD), 39.6 cm (15.6 inch)",
    MRP: 65444,
    MRPx: "₹65,444",
    brand: "HP",
    dealprice: 55990,
    dealpricex: "₹55,990",
    discount: 14,
    discountx: "14%",
    saveprice: 9454,
    savepricex: "₹9,454",
    cashback: "no",
    Reviews: 256,
    Star: 4,
    img1: "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyOTgwfGltYWdlL2pwZWd8aW1hZ2VzL2hkYS9oY2UvOTgyNDQzNTMzOTI5NC5qcGd8MGU4NDk2MjZiMTdhZTE1MjRlODA1MGU5MDJiYjMzYjU5NGY4MzQxY2JiZWE2MWZjNjhhMWE2ODg5Nzg5MWYwMw",
    img2: "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyOTE1fGltYWdlL2pwZWd8aW1hZ2VzL2hmNS9oZDIvOTgyNDQzNTY2Njk3NC5qcGd8MTQ4NzExNjQ5OWRlYTAzMjEzYzY0ZmZkZDRkMjIyYzVjMDUxYjIwNzM1MThiNjQ0ODI1OWY4MzFmYjMyZDA1MA",
    img3: "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMDI0fGltYWdlL2pwZWd8aW1hZ2VzL2g3NC9oZGQvOTgyNDQzNTk5NDY1NC5qcGd8ZjM5NzFkMjQzODA5YTljMDM5OWIyZjBjNmNjOGZhYzE3MWQ0YmNhMjk1YmNjYmM3MWNiOGVkMzFiZjllMzhjMA",
    keyFeatures: [
      {
        one: "Processor: Intel Celeron N4020 Processor",
        two: "RAM: 4 GB",
        three: "Internal Storage: 256 GB",
        four: "Storage Type : SSD",
        five: "Operating System: Windows 11 Home",
      },
    ],
    description: [
      {
        one: "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
        two: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
        three: "Pre-Installed: MS Office Home and Student 2021",
        four: " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
        five: "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
        six: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
        seven:
          "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
      },
    ],
  },
  {
    id: 13,
    imglink:
      "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjA1MDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDUzL2hhYi85ODQ5MjM4MTI2NjIyLmpwZ3xhYmVkMDA2OGU1ZmM4ODYzNTdhNzU1NzJmMzIxOTk5NDNkN2RmMDhjNzQ3YzYwOTczYTAyODRiMDVmOTg4ODE5",
    name: "Lenovo 41IN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-1005G1/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 35.56 cm (14 inch)",
    MRP: 53790,
    MRPx: "₹53,790",
    brand: "Lenovo",
    dealprice: 31490,
    dealpricex: "₹31,490",
    discount: 41,
    discountx: "41%",
    saveprice: 22300,
    savepricex: "₹22,300",
    cashback: "no",
    Reviews: 3699,
    Star: 4,
    img1: "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjg2OXxpbWFnZS9qcGVnfGltYWdlcy9oNDkvaDJiLzk4NDkyMzgxOTIxNTguanBnfGQ4MGMyNTRmYThhYTQ3ZmQwMzhkMDk0MGY3N2YzNzRlOWZmYjUxMmE4MGVlOGVjMWQ2ZDY4YjBhNDZkZWJkY2Y",
    img2: "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMzkxMHxpbWFnZS9qcGVnfGltYWdlcy9oMGUvaGY4Lzk4NDkyMjkyNzkyNjIuanBnfGE1NjdiZjgxNDQyYjkwZWExODQzZWNjZWQ4NjViMDk4Mjk1ODZhNTVhMGEyOGYyMDkwMzljMDQ3ZWI0NWY5NmY",
    img3: "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMDQ4fGltYWdlL2pwZWd8aW1hZ2VzL2hkNS9oMGQvOTg0OTIzMDI2MjMwMi5qcGd8NzczOGEwNjU3NzkwMDFhMzNmZjU4MTA5ZjQwOGYzMWIwZTg5ZTFiY2EzMzk1Yzg2MWJkZmJhNTJiMWNiZmExNg",
    keyFeatures: [
      {
        one: "Processor: Intel Celeron N4020 Processor",
        two: "RAM: 4 GB",
        three: "Internal Storage: 256 GB",
        four: "Storage Type : SSD",
        five: "Operating System: Windows 11 Home",
      },
    ],
    description: [
      {
        one: "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
        two: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
        three: "Pre-Installed: MS Office Home and Student 2021",
        four: " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
        five: "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
        six: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
        seven:
          "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
      },
    ],
  },
  {
    id: 14,
    imglink:
      "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NzA0NzV8aW1hZ2UvanBlZ3xpbWFnZXMvaDIxL2g3NS85ODQxMjI3MzAwODk0LmpwZ3xmZWFjMjg5NzlhMTY5OTZmNDZkYTczZjlmNWY1YmY5YTRhMDVjN2RiZjhiYmM1YTNjNWI1N2QzNmMyNjRlZWYz",
    name: "Acer A315-23 Aspire 3 Laptop (AMD Ryzen 3-3250U/4 GB/256 GB SSD/AMD Radeon Graphics/Windows 11/ Full HD), 39.62 cm (15.6 inch)",
    MRP: 39999,
    MRPx: "₹39,999",
    brand: "Acer",
    dealprice: 29990,
    dealpricex: "₹29,990",
    discount: 25,
    discountx: "25%",
    saveprice: 10009,
    savepricex: "₹10,009",
    cashback: "no",
    Reviews: 2479,
    Star: 5,
    img1: "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w4NDM1fGltYWdlL2pwZWd8aW1hZ2VzL2g3YS9oNWYvOTg0MTIyNzM2NjQzMC5qcGd8YTI5NmMwNjlmOGQyNWIyMTg5N2MzMWRlYTM1MzhkMzcxOTJiNWYzYWE1MmNiZTVlN2ZkMjYwMjFkYWY0NTk5OQ",
    img2: "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMTc4NHxpbWFnZS9qcGVnfGltYWdlcy9oNmMvaDYzLzk4NDEyMTkxNzQ0MzAuanBnfDQxNTA0NjcwNWEyYTM1MTZlYjI3MzUxM2M3MzYxMWM1ODIzZGI2NWZlOWEzYTY5MGYzMjQ3OTc0MDM3ZjY4Nzk",
    img3: "https://www.reliancedigital.in/medias/Acer-15-Aspire3-R3-Laptop-492849812-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w1ODQ1fGltYWdlL2pwZWd8aW1hZ2VzL2hhYy9oNTAvOTg0MTIyMDQ4NTE1MC5qcGd8NmY5ZjhiZjlmNTZjNmIzZWNmOTUwY2E2NDJlMGJkYmM0MGM1OTJmY2ZkZjlkOTYxYzUwZGQxZWUxODRiOWMxNQ",
    keyFeatures: [
      {
        one: "Processor: Intel Celeron N4020 Processor",
        two: "RAM: 4 GB",
        three: "Internal Storage: 256 GB",
        four: "Storage Type : SSD",
        five: "Operating System: Windows 11 Home",
      },
    ],
    description: [
      {
        one: "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
        two: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
        three: "Pre-Installed: MS Office Home and Student 2021",
        four: " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
        five: "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
        six: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
        seven:
          "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
      },
    ],
  },
  {
    id: 15,
    imglink:
      "https://www.reliancedigital.in/medias/HP-14s-dq3032tu-Laptops-492849723-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyODAzOTB8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ4L2hlNS85ODA3MDk5ODU0ODc4LmpwZ3wxYWQxMjBmMTA3M2ZhN2VkMjY1MjMxYTZhOTYzNjU0NzNiMzAyZWVhMGZkOWZjZDFmMzIzNzJiODcwYzY5NWMy",
    name: "HP 14s-dq3032tu Thin & Light Laptop (Intel Celeron N4500/8GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/HD), 35.56 cm (14 inch)",
    MRP: 37006,
    MRPx: "₹37,006",
    brand: "HP",
    dealprice: 29990,
    dealpricex: "₹29,990",
    discount: 19,
    discountx: "19%",
    saveprice: 7016,
    savepricex: "₹7,016",
    cashback: "no",
    Reviews: 2569,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/HP-14s-dq3032tu-Laptops-492849723-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMTY1M3xpbWFnZS9qcGVnfGltYWdlcy9oYWEvaDU5Lzk4MDcwOTk5MjA0MTQuanBnfGQwZDdiMTdlYzVkYWU0OWMxZDBjMDM3MjExZTJiNTBjN2ViZDgwNzNmMDFkMzY1MmFhOTQyN2U1ZWI2ZjlhMGE",
    img2: "https://www.reliancedigital.in/medias/HP-14s-dq3032tu-Laptops-492849723-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMTkxM3xpbWFnZS9qcGVnfGltYWdlcy9oYTUvaGU0Lzk4MDcxMDAyNDgwOTQuanBnfDQ3NmJkODU1YzY5MjIyZjM3NjAwNDc2ZTQxZGE3NjU3NjE0ZDM1MGFmZDllNTJmYmFjNDcyZGJlNGRkM2Y1NmU",
    img3: "https://www.reliancedigital.in/medias/HP-14s-dq3032tu-Laptops-492849723-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMTk5N3xpbWFnZS9qcGVnfGltYWdlcy9oMmEvaGJkLzk4MDcxMDA1NzU3NzQuanBnfGQ2MjE4ZDlhZDc3Zjk2OGRhNmUwZTkxOGVhN2Y5ZDdhMDA2YTczNGViMTUxOTM4YzNlNjQwMTYwMTQ0OGY1ZGM",
    keyFeatures: [
      {
        one: "Processor: Intel Celeron N4020 Processor",
        two: "RAM: 4 GB",
        three: "Internal Storage: 256 GB",
        four: "Storage Type : SSD",
        five: "Operating System: Windows 11 Home",
      },
    ],
    description: [
      {
        one: "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
        two: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
        three: "Pre-Installed: MS Office Home and Student 2021",
        four: " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
        five: "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
        six: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
        seven:
          "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
      },
    ],
  },
  {
    id: 16,
    imglink:
      "https://www.reliancedigital.in/medias/Acer-A314-35-Laptop-492849921-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzYyNjB8aW1hZ2UvanBlZ3xpbWFnZXMvaGIwL2gzNC85ODE5MzE3MjA3MDcwLmpwZ3wxZDU2ZTFlMDdjOGU0NTMyZTcwZTRiMjA3MzAxYzYxNTVlMTkyODZmNzA3NzAxZDRhNDQ3MDViMmY3YTc2NWJk",
    name: "Acer A314-35 Aspire 3 Laptop (Intel Celeron N4500/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/HD), 35.56 cm (14 inch)",
    MRP: 42999,
    MRPx: "₹42,999",
    brand: "Acer",
    dealprice: 26699,
    dealpricex: "₹26,699",
    discount: 38,
    discountx: "38%",
    saveprice: 16300,
    savepricex: "₹16,300",
    cashback: "no",
    Reviews: 799,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/Acer-A314-35-Laptop-492849921-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNDE1fGltYWdlL2pwZWd8aW1hZ2VzL2hkMS9oM2IvOTgxOTMxNzI3MjYwNi5qcGd8ODc2NDgzZTgwOWQxNjg2ODdkMDMyZTc2ZjZlZGRkMGU1YjljNDk4MzgxOGQ4M2M3MzIzMTY3MmJmYzQxYjNhNg",
    img2: "https://www.reliancedigital.in/medias/Acer-A314-35-Laptops-492849921-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTkwN3xpbWFnZS9qcGVnfGltYWdlcy9oYWMvaGQ4Lzk4MTA5NjUyNjY0NjIuanBnfDdkYTZmYWIyZjUwZWZmNWNiNDhlMTFiOTRlMWJmMTBjMmJiZTAwYjk2YTVhMTVhNWNkOWE3MjQ3OWIyNGFkMGQ",
    img3: "https://www.reliancedigital.in/medias/Acer-A314-35-Laptops-492849921-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNTU2MXxpbWFnZS9qcGVnfGltYWdlcy9oYjMvaGUyLzk4MTA5NjU5MjE4MjIuanBnfDcyODkyY2JkZjk3YWE3OWJmMTcxY2Q5ZDg5MDYwZTlhNmJhNmYyMjhmNjY3ZmE5ZjhkMjQ5Mzk2NjZhMzlhNTI",
    keyFeatures: [
      {
        one: "Processor: Intel Celeron N4020 Processor",
        two: "RAM: 4 GB",
        three: "Internal Storage: 256 GB",
        four: "Storage Type : SSD",
        five: "Operating System: Windows 11 Home",
      },
    ],
    description: [
      {
        one: "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
        two: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
        three: "Pre-Installed: MS Office Home and Student 2021",
        four: " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
        five: "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
        six: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
        seven:
          "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
      },
    ],
  },
  {
    id: 17,
    imglink:
      "https://www.reliancedigital.in/medias/Lenovo-8JIN-Laptops-492850142-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MjAxN3xpbWFnZS9qcGVnfGltYWdlcy9oZWIvaDM2Lzk4NDk0MDg4MTUxMzQuanBnfDBjOWQ4MmJlZjIzMGUwZjIyZDUzNWIzMDVhYzY3ZTFiMGZjZjYzOTg2ZTJkN2E4OGE5YjgyYTA1NDc3ZmZiNWM",
    name: "Lenovo 8JIN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-10110U/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 39.62 cm (15.6 inch)",
    MRP: 53790,
    MRPx: "₹53,790",
    brand: "Lenovo",
    dealprice: 31490,
    dealpricex: "₹31,490",
    discount: 41,
    discountx: "41%",
    saveprice: 22300,
    savepricex: "₹22,300",
    cashback: "no",
    Reviews: 7699,
    Star: 5,
    img1: "https://www.reliancedigital.in/medias/Lenovo-8JIN-Laptops-492850142-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxODk3fGltYWdlL2pwZWd8aW1hZ2VzL2gxMi9oNjIvOTg0OTQwODg4MDY3MC5qcGd8ZWVlMzQ2N2RjYWQ4NzFiMzFiMDYwYTRmYzBmYWRmOTQ1ZTZlNDJmZTAzNjc1YTQ1NTE2NGQ1OTI1MTgyN2MxMA",
    img2: "https://www.reliancedigital.in/medias/Lenovo-8JIN-Laptops-492850142-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMjM1N3xpbWFnZS9qcGVnfGltYWdlcy9oZmQvaDBkLzk4NDk0MDkyMDgzNTAuanBnfDYyMjdkM2NkOTc4ZTU4MmUwYjRjNmE1NTRmZWFjN2YyM2QzMzA5Nzc2NTk4MDA5MDRiZGU4NzE0NGRmZjBiMTQ",
    img3: "https://www.reliancedigital.in/medias/Lenovo-8JIN-Laptops-492850142-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNTk2NXxpbWFnZS9qcGVnfGltYWdlcy9oOTMvaDVkLzk4NDk0MDk1MzYwMzAuanBnfGYyY2QwYjhlYjk2YWEzYTdhM2Q3MGMxMGFmN2UyYjM4NDVmYzhhOTVkMzkyNWVlZTA1ZDNlMmZmOGQxOWNkZjg",
    keyFeatures: [
      {
        one: "Processor: Intel Celeron N4020 Processor",
        two: "RAM: 4 GB",
        three: "Internal Storage: 256 GB",
        four: "Storage Type : SSD",
        five: "Operating System: Windows 11 Home",
      },
    ],
    description: [
      {
        one: "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
        two: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
        three: "Pre-Installed: MS Office Home and Student 2021",
        four: " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
        five: "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
        six: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
        seven:
          "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
      },
    ],
  },
  {
    id: 18,
    imglink:
      "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDg2MnxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaGI0Lzk4NDkyMzg2NTA5MTAuanBnfDY1ZTdjNmUxYzdiMDczOThhZDMzYjBlZGE1MmZlYTE5ZDZhOGNhZGEzYTU2NDk5YWQ5ODgxMTY4NjA3OTI4ZDE",
    name: "Lenovo 7KIN IdeaPad Slim 3i Laptop (Intel Celeron N4020/4GB/256GB/ Windows 11/MSO/HD), 35.56 cm (14 inch)",
    MRP: 40490,
    MRPx: "₹40,490",
    brand: "Lenovo",
    dealprice: 28980,
    dealpricex: "₹28,980",
    discount: 28,
    discountx: "28%",
    saveprice: 11510,
    savepricex: "₹11,510",
    cashback: "no",
    Reviews: 299,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTE2fGltYWdlL2pwZWd8aW1hZ2VzL2g5ZC9oZWEvOTg0OTIzODUxOTgzOC5qcGd8MWRlMzc2NmUwOGE4MWE4MjZmOWQ1NmViOTk4NDg1ODMwNTlmYzlkYTg5NjkwODkyMmZjOTc4NThhNTYxZWEwYg",
    img2: "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTE4NHxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDY4Lzk4NDkyMjg2MjM5MDIuanBnfGViOWQ0YmIzZjU5MWQwYTIxYzQzMTVjMDg3NjM2OWNkNWYwYmYyMzY5NjRhZTc5MjhmY2E4ZWViNGJjMTcwZDQ",
    img3: "https://www.reliancedigital.in/medias/Lenovo-81WH007KIN-LAPTOP-492849666-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxODA4M3xpbWFnZS9qcGVnfGltYWdlcy9oMTgvaGVkLzk4NDkyMjk2MDY5NDIuanBnfDgyOGJhMTZiOTk2YWE3Y2VkZmU5NTkzMDk0NWI2ZDIwZTRhOWExMjgyZGE1NzU0YjRlOGIxYjJjNmJlYTFlMjQ",
    keyFeatures: [
      {
        one: "Processor: Intel Celeron N4020 Processor",
        two: "RAM: 4 GB",
        three: "Internal Storage: 256 GB",
        four: "Storage Type : SSD",
        five: "Operating System: Windows 11 Home",
      },
    ],
    description: [
      {
        one: "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
        two: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
        three: "Pre-Installed: MS Office Home and Student 2021",
        four: " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
        five: "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
        six: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
        seven:
          "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
      },
    ],
  },
  {
    id: 19,
    imglink:
      "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w4OTU2OXxpbWFnZS9qcGVnfGltYWdlcy9oMGYvaGYwLzk4MjQ0MzUyNzM3NTguanBnfGQ5NzFkOGZkMjQyNjc1YzVkOGYzNGM0YmJjYmY3NTY2MWI0NTZkMTA2NjgwODQxZGEwMmZlNzU1ZjU3ZWZmYjQ",
    name: "HP 15s-fq4022TU Laptop (11th Gen-Intel Core i5-1155G7/8GB/512GB SSD + 32GB Intel Optane Memory/Intel Iris Xe Graphics/Windows 11/MSO/FHD), 39.6 cm (15.6 inch)",
    MRP: 65444,
    MRPx: "₹65,444",
    brand: "HP",
    dealprice: 55990,
    dealpricex: "₹55,990",
    discount: 14,
    discountx: "14%",
    saveprice: 9454,
    savepricex: "₹9,454",
    cashback: "no",
    Reviews: 1258,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyOTgwfGltYWdlL2pwZWd8aW1hZ2VzL2hkYS9oY2UvOTgyNDQzNTMzOTI5NC5qcGd8MGU4NDk2MjZiMTdhZTE1MjRlODA1MGU5MDJiYjMzYjU5NGY4MzQxY2JiZWE2MWZjNjhhMWE2ODg5Nzg5MWYwMw",
    img2: "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyOTE1fGltYWdlL2pwZWd8aW1hZ2VzL2hmNS9oZDIvOTgyNDQzNTY2Njk3NC5qcGd8MTQ4NzExNjQ5OWRlYTAzMjEzYzY0ZmZkZDRkMjIyYzVjMDUxYjIwNzM1MThiNjQ0ODI1OWY4MzFmYjMyZDA1MA",
    img3: "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMDI0fGltYWdlL2pwZWd8aW1hZ2VzL2g3NC9oZGQvOTgyNDQzNTk5NDY1NC5qcGd8ZjM5NzFkMjQzODA5YTljMDM5OWIyZjBjNmNjOGZhYzE3MWQ0YmNhMjk1YmNjYmM3MWNiOGVkMzFiZjllMzhjMA",
    keyFeatures: [
      {
        one: "Processor: Intel Celeron N4020 Processor",
        two: "RAM: 4 GB",
        three: "Internal Storage: 256 GB",
        four: "Storage Type : SSD",
        five: "Operating System: Windows 11 Home",
      },
    ],
    description: [
      {
        one: "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
        two: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
        three: "Pre-Installed: MS Office Home and Student 2021",
        four: " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
        five: "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
        six: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
        seven:
          "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
      },
    ],
  },
  {
    id: 20,
    imglink:
      "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMjA1MDF8aW1hZ2UvanBlZ3xpbWFnZXMvaDUzL2hhYi85ODQ5MjM4MTI2NjIyLmpwZ3xhYmVkMDA2OGU1ZmM4ODYzNTdhNzU1NzJmMzIxOTk5NDNkN2RmMDhjNzQ3YzYwOTczYTAyODRiMDVmOTg4ODE5",
    name: "Lenovo 41IN IdeaPad Slim 3 Laptop (10th Gen-Intel Core i3-1005G1/4GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/FHD), 35.56 cm (14 inch)",
    MRP: 53790,
    MRPx: "₹53,790",
    brand: "Lenovo",
    dealprice: 31490,
    dealpricex: "₹31,490",
    discount: 41,
    discountx: "41%",
    saveprice: 22300,
    savepricex: "₹22,300",
    cashback: "no",
    Reviews: 2799,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjg2OXxpbWFnZS9qcGVnfGltYWdlcy9oNDkvaDJiLzk4NDkyMzgxOTIxNTguanBnfGQ4MGMyNTRmYThhYTQ3ZmQwMzhkMDk0MGY3N2YzNzRlOWZmYjUxMmE4MGVlOGVjMWQ2ZDY4YjBhNDZkZWJkY2Y",
    img2: "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMzkxMHxpbWFnZS9qcGVnfGltYWdlcy9oMGUvaGY4Lzk4NDkyMjkyNzkyNjIuanBnfGE1NjdiZjgxNDQyYjkwZWExODQzZWNjZWQ4NjViMDk4Mjk1ODZhNTVhMGEyOGYyMDkwMzljMDQ3ZWI0NWY5NmY",
    img3: "https://www.reliancedigital.in/medias/Lenovo-41IN-Laptops-492850143-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMDQ4fGltYWdlL2pwZWd8aW1hZ2VzL2hkNS9oMGQvOTg0OTIzMDI2MjMwMi5qcGd8NzczOGEwNjU3NzkwMDFhMzNmZjU4MTA5ZjQwOGYzMWIwZTg5ZTFiY2EzMzk1Yzg2MWJkZmJhNTJiMWNiZmExNg",
    keyFeatures: [
      {
        one: "Processor: Intel Celeron N4020 Processor",
        two: "RAM: 4 GB",
        three: "Internal Storage: 256 GB",
        four: "Storage Type : SSD",
        five: "Operating System: Windows 11 Home",
      },
    ],
    description: [
      {
        one: "Processor: Intel Celeron N4020 | Speed: 1.1 GHz (Base) - 2.8 GHz (Max) | 2 Cores | 4MB Cache",
        two: "OS: Pre-Loaded Windows 11 Home with Lifetime Validity",
        three: "Pre-Installed: MS Office Home and Student 2021",
        four: " Memory and Storage: 4GB RAM DDR4 | 256GB SSD",
        five: "Display: 14' HD (1366x768) | Brightness : 220nits | Anti-Glare",
        six: "1.99 cm Thin and 1.5 kg Light | Narrow Bezel",
        seven:
          "Travel to ends of the world and back without worrying about the extra baggage with your 1.5 kg Ideapad Slim 3. This ultra-sleek laptop, with 19.9 mm thinness, is sure to steal the spotlight wherever it goes. Stream your favourite series, work on your deadlines and say goodbye to lag with 10th Gen Intel Core processor. 4 GB RAM and highly reliable 256 GB SSD storage takes your productivity to higher levels without anyone holding you back. The Ideapad Slim 3i, with its 39.62 cm (15.6 inch) FHD antiglare display, is perfect down to pixels from every angle. Edged with 2-sided narrow bezels, it surely pushes the boundaries to give you a broader picture.",
      },
    ],
  },
  {
    id: 21,
    imglink:
      "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMTcyODR8aW1hZ2UvanBlZ3xpbWFnZXMvaGU3L2gxNC85NzU1MTY3NDI0NTQyLmpwZ3wzMzRhZGZmYmZjNzU1YWNiMmQwOGQ2NmNmNjRjZDdlYjE1ZDEzNDAzZmEyN2I5NjZlZjVhYWQ3NTU5M2M4Yjk1",
    name: "Kelvinator 1.8L 1200W Food Grade Electric Kettle with Water Level Indicator, LED Light, Dry Boil Protection, Auto Shut-off, 2 Years Warranty",
    MRP: 1999,
    MRPx: "₹1,999",
    brand: "Kelvinator",
    dealprice: 799,
    dealpricex: "₹799",
    discount: 60,
    discountx: "60%",
    saveprice: 1200,
    savepricex: "₹1,200",
    cashback: "no",
    Reviews: 6899,
    Star: 4,
    img1: "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w2NzgxfGltYWdlL2pwZWd8aW1hZ2VzL2g4My9oZWIvOTc1NTE2NzQ5MDA3OC5qcGd8YzZiMzE0OGMwMDA4Mzc3YTA3ZDFlZDJjNTc2MWMwZGE3YTAyOTI3ZjcwNzU2MDg2NGExZTNjNmUwYjMzZDRkOQ",
    img2: "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w2ODkwfGltYWdlL2pwZWd8aW1hZ2VzL2g2My9oMmEvOTc1NTE2NzgxNzc1OC5qcGd8MGJmMDYzNjdlOWU3NTVkZGQ0NzkwZmEyZjhjZTEzNGViYTEzOThmZjI3M2RhMTMzNGNiZTE0NWE0YjY5ZGFiNQ",
    img3: "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w0MzU1fGltYWdlL2pwZWd8aW1hZ2VzL2gzZS9oMzkvOTc1NTE2ODE0NTQzOC5qcGd8MDI3Zjc2MGM0OWI5N2JjYWI5OGIzMDIxNDNjZjRkYWQwYjk4NWZjZWM4MDM0OGY2Mzc4ZmQ4OGUyZGFkMjc1MA",
    keyFeatures: [
      {
        one: "1200W, 1.8L Capacity",
        two: "Food Grade Stainless Steel Body",
        three: "Boil Dry protection, Auto shutoff",
        four: "Red Indicator Light, Cordless Kettle",
        five: "Push button to open up the Lid",
      },
    ],
    description: [
      {
        one: "Heating Element: Concealed",
        two: "Suitable For: Water, Tea & Soups",
        three: "Features: Concealed Heating Element Cordless Operation",
        four: "Power Consumption: 1200 Watt",
        five: "Safety Locking Lid: YES",
        six: "Auto On/Off Function: YES",
        seven:
          "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
      },
    ],
  },
  {
    id: 22,
    imglink:
      "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODMyODh8aW1hZ2UvanBlZ3xpbWFnZXMvaGU0L2g3YS85NjIwMzI4NDE1MjYyLmpwZ3xiYmIwYzMwMzI0YWYyMmM0MjdjYTM5Mzc0ODk5MWY0MmFiYWEwNGU0YWZhNzIzNDUwMDQ0YmFmMTE0ODlmNzhj",
    name: "BPL Beard Trimmer with Digital Battery Indicator, 70mins Cordless Usage, Fast Charging, 4 Comb Settings, 2 Years Warranty, Black and Light Gold",
    MRP: 1699,
    MRPx: "₹1,699",
    brand: "BPL",
    dealprice: 349,
    dealpricex: "₹349",
    discount: 79,
    discountx: "79%",
    saveprice: 1350,
    savepricex: "₹1,350",
    cashback: "no",
    Reviews: 789,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNTU3MXxpbWFnZS9qcGVnfGltYWdlcy9oYmIvaGEzLzk2MjAzMjg0ODA3OTguanBnfGY5OTc1OTliMDUyN2MwMDg5NmE0ZjcxZjUzNzNiMDdlYWY2NmM4NmZlOGE4NmJlOTg0Zjk2YjAxY2VkZTQyN2M",
    img2: "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMjA2MHxpbWFnZS9qcGVnfGltYWdlcy9oOWEvaDNiLzk2MjAzMjg4MDg0NzguanBnfDAwMTczNjQ4ZDRmOWI0ZmQ5ZTYzZjdhZmRjZjAwOGIyYmM4OTI1YWYwMDY1ZDY5OGMzOWIxZGNlZGExZjBjZDY",
    img3: "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjQyNnxpbWFnZS9qcGVnfGltYWdlcy9oM2MvaDlmLzk2MjAzMjkxMzYxNTguanBnfDVhY2FiNWRjMjliOGZmNTZhZTQ5NmMxNDljMTFmODgxNTEzYTFjMWRiNGYwZDAxM2VmNmY3OTQ5NTFhNmI2Nzg",
    keyFeatures: [
      {
        one: "1200W, 1.8L Capacity",
        two: "Food Grade Stainless Steel Body",
        three: "Boil Dry protection, Auto shutoff",
        four: "Red Indicator Light, Cordless Kettle",
        five: "Push button to open up the Lid",
      },
    ],
    description: [
      {
        one: "Heating Element: Concealed",
        two: "Suitable For: Water, Tea & Soups",
        three: "Features: Concealed Heating Element Cordless Operation",
        four: "Power Consumption: 1200 Watt",
        five: "Safety Locking Lid: YES",
        six: "Auto On/Off Function: YES",
        seven:
          "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
      },
    ],
  },
  {
    id: 23,
    imglink:
      "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
    name: "Panasonic 1.8 litres Rice Cooker, SR-WA18 (GE9)",
    MRP: 3395,
    MRPx: "₹3,395",
    brand: "Panasonic",
    dealprice: 1699,
    dealpricex: "₹1,699",
    discount: 50,
    discountx: "50%",
    saveprice: 1696,
    savepricex: "₹1,696",
    cashback: "no",
    Reviews: 3659,
    Star: 2,
    img1: "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
    img2: "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
    img3: "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
    keyFeatures: [
      {
        one: "1200W, 1.8L Capacity",
        two: "Food Grade Stainless Steel Body",
        three: "Boil Dry protection, Auto shutoff",
        four: "Red Indicator Light, Cordless Kettle",
        five: "Push button to open up the Lid",
      },
    ],
    description: [
      {
        one: "Heating Element: Concealed",
        two: "Suitable For: Water, Tea & Soups",
        three: "Features: Concealed Heating Element Cordless Operation",
        four: "Power Consumption: 1200 Watt",
        five: "Safety Locking Lid: YES",
        six: "Auto On/Off Function: YES",
        seven:
          "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
      },
    ],
  },
  {
    id: 24,
    imglink:
      "https://www.reliancedigital.in/medias/Reconnect-DSM302-CA-Sandwich-Maker-491604309-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NjI4NzJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDcwL2gyNS85NTQ1NDI5Mzg1MjQ2LmpwZ3wyZDQ1NGMxYjAxNTdiN2IwYTc2NDRlYzFkNzA1YzYyMjQ1NWFhY2JjMGZiOWQwNjAwNWM4MTljNDUxNDhhZDRl",
    name: "Reconnect Captain America Sandwich Maker with Theme Impression, Non-Stick Plates, Cool Coating for Burn-Free Touch, Heat-up Light Indicator, Lid Lock, Compact Vertical Storage, 2 Years Warranty",
    MRP: 2199,
    MRPx: "₹2,199",
    brand: "Reconnect",
    dealprice: 799,
    dealpricex: "₹799",
    discount: 64,
    discountx: "64%",
    saveprice: 1400,
    savepricex: "₹1,400",
    cashback: "no",
    Reviews: 99,
    Star: 1,
    img1: "https://www.reliancedigital.in/medias/Reconnect-DSM302-CA-Sandwich-Maker-491604309-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNzU3N3xpbWFnZS9qcGVnfGltYWdlcy9oZDEvaGEzLzk1NDU0Mjk0NTA3ODIuanBnfDQzY2Y2NmY2YjkzZWFmZWIzNGYzYTYwMTY5MzNkYmZmMjYxODgwOWUxNGRmMDMxYmI4MmE2MGQzNzFmMmE5ZGY",
    img2: "https://www.reliancedigital.in/medias/Reconnect-DSM302-CA-Sandwich-Maker-491604309-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNzE2NHxpbWFnZS9qcGVnfGltYWdlcy9oMWQvaDgwLzk1NDU0MjUxMjU0MDYuanBnfGJkNDdlMzQzMzVmOTQ0MzVkYzRkZDg3YWZkN2I3ZTgzOTNkZDM0ODA5NTY4YTA1ODNiNzg1YTU3Y2RlZjQ4MjU",
    img3: "https://www.reliancedigital.in/medias/Reconnect-DSM302-CA-Sandwich-Maker-491604309-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjUxMXxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaGQ2Lzk1NDU0MjU3ODA3NjYuanBnfGE3ZDhlOGE3ZjBmZjdlYjUyYWRhOGY0ZjI3MWQwNDUxNzkxZjdlNjU4ZmEyZjZmMTkxMzdjYzFkNmZmZWIxMDU",
    keyFeatures: [
      {
        one: "1200W, 1.8L Capacity",
        two: "Food Grade Stainless Steel Body",
        three: "Boil Dry protection, Auto shutoff",
        four: "Red Indicator Light, Cordless Kettle",
        five: "Push button to open up the Lid",
      },
    ],
    description: [
      {
        one: "Heating Element: Concealed",
        two: "Suitable For: Water, Tea & Soups",
        three: "Features: Concealed Heating Element Cordless Operation",
        four: "Power Consumption: 1200 Watt",
        five: "Safety Locking Lid: YES",
        six: "Auto On/Off Function: YES",
        seven:
          "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
      },
    ],
  },
  {
    id: 25,
    imglink:
      "https://www.reliancedigital.in/medias/hindware-calisto-Water-Purifier-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNzk5OXxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaDJlLzk3NDQ0NDcxMTExOTguanBnfDg5YzRlZDBlMjNjZDIyMDE2OGJmZjgxZjlkYWQyNWMwNzkxNGI1NTgzMWQ5OGM0NmI2NDRmZmFiOGJhMDliZjI",
    name: "Hindware Calisto 7 Litres RO+UV+UF Water Purifier with Smart LED Indicators, White (WR-18071UFN)",
    MRP: 14990,
    MRPx: "₹14,990",
    brand: "Hindware",
    dealprice: 7299,
    dealpricex: "₹7,299",
    discount: 51,
    discountx: "51%",
    saveprice: 7691,
    savepricex: "₹7,691",
    cashback: "no",
    Reviews: 2369,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/hindware-calisto-Water-Purifier-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNDYxfGltYWdlL2pwZWd8aW1hZ2VzL2g1Zi9oNjkvOTc0NDQ0NzE3NjczNC5qcGd8ZTcwMWJmYzdjZDBmZGY4NThjZjcyNWNiOGY0OTk0NDYzZTEwZDcwYzQ5OTY5ODM5NzE4NTAzZWQ2NWZhNmM3OA",
    img2: "https://www.reliancedigital.in/medias/hindware-calisto-Water-Purifier-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNTQyfGltYWdlL2pwZWd8aW1hZ2VzL2g3MC9oMzkvOTc0NDQ0NzUwNDQxNC5qcGd8ZGFmYmIwZGZlMjJiY2VjZTA1Zjc3NWVjMmExMzljN2VmNmYwYmU0MmIzZGQ0NTEyMGMxNGVkY2NhYWYwMjU5MQ",
    img3: "https://www.reliancedigital.in/medias/hindware-calisto-Water-Purifier-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNTI4fGltYWdlL2pwZWd8aW1hZ2VzL2g1YS9oNDEvOTc0NDQ0NzgzMjA5NC5qcGd8YmYwNzU5OTg0NTUzN2RiZmUxMjYzMzcyNjIwZDk1MGJkOWRhNGRmYjYxZTFlMjIzMTc1ODQxYzczM2IwMzg2NA",
    keyFeatures: [
      {
        one: "1200W, 1.8L Capacity",
        two: "Food Grade Stainless Steel Body",
        three: "Boil Dry protection, Auto shutoff",
        four: "Red Indicator Light, Cordless Kettle",
        five: "Push button to open up the Lid",
      },
    ],
    description: [
      {
        one: "Heating Element: Concealed",
        two: "Suitable For: Water, Tea & Soups",
        three: "Features: Concealed Heating Element Cordless Operation",
        four: "Power Consumption: 1200 Watt",
        five: "Safety Locking Lid: YES",
        six: "Auto On/Off Function: YES",
        seven:
          "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
      },
    ],
  },
  {
    id: 26,
    imglink:
      "https://www.reliancedigital.in/medias/BPL-BBT001MLC-Beard-Trimmer-491903144-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNDIyMzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGU0L2g5Yy85NjEzNTc0MzczNDA2LmpwZ3w2YzY0NjMyNGRmYjQ5NTIzNWI3Y2FlODQ4YzFmN2JkNjRkNGM2YmJiZTJlMDA3NDQ5YTJhZTMxODQ3MGMwNWRl",
    name: "BPL 2-in-1 Beard and Nose Trimmer, 45mins Cordless Usage, 3mm-12mm Adjustable Comb, 2 Years Warranty, Navy Blue",
    MRP: 1299,
    MRPx: "₹1,299",
    brand: "BPL",
    dealprice: 349,
    dealpricex: "₹349",
    discount: 73,
    discountx: "73%",
    saveprice: 950,
    savepricex: "₹950",
    cashback: "no",
    Reviews: 2145,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/BPL-BBT001MLC-Beard-Trimmer-491903144-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNTkwMXxpbWFnZS9qcGVnfGltYWdlcy9oNTQvaDEwLzk2MTM1NzQ0Mzg5NDIuanBnfDk1ZmI2NTNlODMzNzBhZTk5ZGQwZDZkYmEzOWViN2RmZGNlNjkyOWMzZGVlN2Q4ZTEyMTg5ZjA4NTUyOGI4Zjg",
    img2: "https://www.reliancedigital.in/medias/BPL-BBT001MLC-Beard-Trimmer-491903144-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMTA2OXxpbWFnZS9qcGVnfGltYWdlcy9oZWEvaDVmLzk2MTM1NzQ3NjY2MjIuanBnfDU4MjJlZTI5MjJmMmNlNjc4YWI3ZTM1MGU4YjJlZWMwZmZhZDRlYmNkOTBmMjcwZTRkNDFlMzIwYjM5MDkzYzM",
    img3: "https://www.reliancedigital.in/medias/BPL-BBT001MLC-Beard-Trimmer-491903144-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMjg1M3xpbWFnZS9qcGVnfGltYWdlcy9oOGMvaGMzLzk2MTM1NzUwOTQzMDIuanBnfGY4NzljNWIxOTA5MDA0ZWI1MTkyYzM2YjcxYzI2OTYyYzcwM2Q0YWU2NjFkOWVmNzU5YTFlMzAyOWQxMTA3ODg",
    keyFeatures: [
      {
        one: "1200W, 1.8L Capacity",
        two: "Food Grade Stainless Steel Body",
        three: "Boil Dry protection, Auto shutoff",
        four: "Red Indicator Light, Cordless Kettle",
        five: "Push button to open up the Lid",
      },
    ],
    description: [
      {
        one: "Heating Element: Concealed",
        two: "Suitable For: Water, Tea & Soups",
        three: "Features: Concealed Heating Element Cordless Operation",
        four: "Power Consumption: 1200 Watt",
        five: "Safety Locking Lid: YES",
        six: "Auto On/Off Function: YES",
        seven:
          "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
      },
    ],
  },
  {
    id: 27,
    imglink:
      "https://www.reliancedigital.in/medias/Inalsa-Jazz-Pro-Juicer-Mixer-Grinder-491959502-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNjk2MjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDE5L2hmOS85NTUwNjQxNjkyNzAyLmpwZ3w0OWYzYWU2YmM3ZTQ1ZTYyYjNjZWQ3NjdiZWJlMTFkNGQ4YTRhYTFhMmQ5MWRiZjA2NmViNTE4NmRkYTc2MzQy",
    name: "Inalsa Jazz Pro 550 Watts Mixer Grinder With 3 Speed Setting",
    MRP: 4495,
    MRPx: "₹4,495",
    brand: "Inalsa",
    dealprice: 1499,
    dealpricex: "₹1,499",
    discount: 67,
    discountx: "67%",
    saveprice: 2996,
    savepricex: "₹2,996",
    cashback: "no",
    Reviews: 210,
    Star: 2,
    img1: "https://www.reliancedigital.in/medias/Inalsa-Jazz-Pro-Juicer-Mixer-Grinder-491959502-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTk2MnxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaGRhLzk1NTA2NDE3NTgyMzguanBnfDJjMzBiYmFhZDgyMzEyMzczOTA1YjIwZjI2ZmQwMDZjNWZmZjFkN2Y0M2IxYzM1ZDVhMWQzZjQzMmU4MmFkOTg",
    img2: "https://www.reliancedigital.in/medias/Inalsa-Jazz-Pro-Juicer-Mixer-Grinder-491959502-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjUxMHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGRiLzk1NTA2NDIwODU5MTguanBnfDlkYWY4NWZiYjdlNDI0M2JjNWM3OTk2ZjhkNGEwNDI1NmRhZjQ5Nzg1MmYxYTc4MTA0NzY2MGZmNDEyOGQ0MGE",
    img3: "https://www.reliancedigital.in/medias/Inalsa-Jazz-Pro-Juicer-Mixer-Grinder-491959502-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyOTc1OXxpbWFnZS9qcGVnfGltYWdlcy9oMzMvaGM5Lzk1NTA2NDI0MTM1OTguanBnfDE5NGEzOWRhNTZkYTFmOTNmNGYyYjgwZjFjMTBjNmFkMTRmOGMzMjIwNmNmMGFkZjg0MzAwNmRmYzZhNzcxMDM",
    keyFeatures: [
      {
        one: "1200W, 1.8L Capacity",
        two: "Food Grade Stainless Steel Body",
        three: "Boil Dry protection, Auto shutoff",
        four: "Red Indicator Light, Cordless Kettle",
        five: "Push button to open up the Lid",
      },
    ],
    description: [
      {
        one: "Heating Element: Concealed",
        two: "Suitable For: Water, Tea & Soups",
        three: "Features: Concealed Heating Element Cordless Operation",
        four: "Power Consumption: 1200 Watt",
        five: "Safety Locking Lid: YES",
        six: "Auto On/Off Function: YES",
        seven:
          "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
      },
    ],
  },
  {
    id: 28,
    imglink:
      "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMTcyODR8aW1hZ2UvanBlZ3xpbWFnZXMvaGU3L2gxNC85NzU1MTY3NDI0NTQyLmpwZ3wzMzRhZGZmYmZjNzU1YWNiMmQwOGQ2NmNmNjRjZDdlYjE1ZDEzNDAzZmEyN2I5NjZlZjVhYWQ3NTU5M2M4Yjk1",
    name: "Kelvinator 1.8L 1200W Food Grade Electric Kettle with Water Level Indicator, LED Light, Dry Boil Protection, Auto Shut-off, 2 Years Warranty",
    MRP: 1999,
    MRPx: "₹1,999",
    brand: "Kelvinator",
    dealprice: 799,
    dealpricex: "₹799",
    discount: 60,
    discountx: "60%",
    saveprice: 1200,
    savepricex: "₹1,200",
    cashback: "no",
    Reviews: 269,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w2NzgxfGltYWdlL2pwZWd8aW1hZ2VzL2g4My9oZWIvOTc1NTE2NzQ5MDA3OC5qcGd8YzZiMzE0OGMwMDA4Mzc3YTA3ZDFlZDJjNTc2MWMwZGE3YTAyOTI3ZjcwNzU2MDg2NGExZTNjNmUwYjMzZDRkOQ",
    img2: "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w2ODkwfGltYWdlL2pwZWd8aW1hZ2VzL2g2My9oMmEvOTc1NTE2NzgxNzc1OC5qcGd8MGJmMDYzNjdlOWU3NTVkZGQ0NzkwZmEyZjhjZTEzNGViYTEzOThmZjI3M2RhMTMzNGNiZTE0NWE0YjY5ZGFiNQ",
    img3: "https://www.reliancedigital.in/medias/Kelvinator-KEKS00118-ELECTRICKETTLE-491959054-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w0MzU1fGltYWdlL2pwZWd8aW1hZ2VzL2gzZS9oMzkvOTc1NTE2ODE0NTQzOC5qcGd8MDI3Zjc2MGM0OWI5N2JjYWI5OGIzMDIxNDNjZjRkYWQwYjk4NWZjZWM4MDM0OGY2Mzc4ZmQ4OGUyZGFkMjc1MA",
    keyFeatures: [
      {
        one: "1200W, 1.8L Capacity",
        two: "Food Grade Stainless Steel Body",
        three: "Boil Dry protection, Auto shutoff",
        four: "Red Indicator Light, Cordless Kettle",
        five: "Push button to open up the Lid",
      },
    ],
    description: [
      {
        one: "Heating Element: Concealed",
        two: "Suitable For: Water, Tea & Soups",
        three: "Features: Concealed Heating Element Cordless Operation",
        four: "Power Consumption: 1200 Watt",
        five: "Safety Locking Lid: YES",
        six: "Auto On/Off Function: YES",
        seven:
          "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
      },
    ],
  },
  {
    id: 29,
    imglink:
      "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODMyODh8aW1hZ2UvanBlZ3xpbWFnZXMvaGU0L2g3YS85NjIwMzI4NDE1MjYyLmpwZ3xiYmIwYzMwMzI0YWYyMmM0MjdjYTM5Mzc0ODk5MWY0MmFiYWEwNGU0YWZhNzIzNDUwMDQ0YmFmMTE0ODlmNzhj",
    name: "BPL Beard Trimmer with Digital Battery Indicator, 70mins Cordless Usage, Fast Charging, 4 Comb Settings, 2 Years Warranty, Black and Light Gold",
    MRP: 1699,
    MRPx: "₹1,699",
    brand: "BPL",
    dealprice: 349,
    dealpricex: "₹349",
    discount: 79,
    discountx: "79%",
    saveprice: 1350,
    savepricex: "₹1,350",
    cashback: "no",
    Reviews: 156,
    Star: 1,
    img1: "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNTU3MXxpbWFnZS9qcGVnfGltYWdlcy9oYmIvaGEzLzk2MjAzMjg0ODA3OTguanBnfGY5OTc1OTliMDUyN2MwMDg5NmE0ZjcxZjUzNzNiMDdlYWY2NmM4NmZlOGE4NmJlOTg0Zjk2YjAxY2VkZTQyN2M",
    img2: "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMjA2MHxpbWFnZS9qcGVnfGltYWdlcy9oOWEvaDNiLzk2MjAzMjg4MDg0NzguanBnfDAwMTczNjQ4ZDRmOWI0ZmQ5ZTYzZjdhZmRjZjAwOGIyYmM4OTI1YWYwMDY1ZDY5OGMzOWIxZGNlZGExZjBjZDY",
    img3: "https://www.reliancedigital.in/medias/BPL-BBTD0013C-Beard-Trimmer-491903183-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjQyNnxpbWFnZS9qcGVnfGltYWdlcy9oM2MvaDlmLzk2MjAzMjkxMzYxNTguanBnfDVhY2FiNWRjMjliOGZmNTZhZTQ5NmMxNDljMTFmODgxNTEzYTFjMWRiNGYwZDAxM2VmNmY3OTQ5NTFhNmI2Nzg",
    keyFeatures: [
      {
        one: "1200W, 1.8L Capacity",
        two: "Food Grade Stainless Steel Body",
        three: "Boil Dry protection, Auto shutoff",
        four: "Red Indicator Light, Cordless Kettle",
        five: "Push button to open up the Lid",
      },
    ],
    description: [
      {
        one: "Heating Element: Concealed",
        two: "Suitable For: Water, Tea & Soups",
        three: "Features: Concealed Heating Element Cordless Operation",
        four: "Power Consumption: 1200 Watt",
        five: "Safety Locking Lid: YES",
        six: "Auto On/Off Function: YES",
        seven:
          "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
      },
    ],
  },
  {
    id: 30,
    imglink:
      "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
    name: "Panasonic 1.8 litres Rice Cooker, SR-WA18 (GE9)",
    MRP: 3395,
    MRPx: "₹3,395",
    brand: "Panasonic",
    dealprice: 1699,
    dealpricex: "₹1,699",
    discount: 50,
    discountx: "50%",
    saveprice: 1696,
    savepricex: "₹1,696",
    cashback: "no",
    Reviews: 1536,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
    img2: "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
    img3: "https://www.reliancedigital.in/medias/Panasonic-Refrigerators-SR-WA18-GE9-491265256-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNDE0MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDVlLzkxNzYxODk0MDMxNjYuanBnfDU0OTBhMWVjYzhlNzUyOWEzOWJiMjg5M2VlMjNlMDM2YTUwNTZhM2YyYjExYjIxOTAxNzkzNDQ2ZTlmYzNkZWI",
    keyFeatures: [
      {
        one: "1200W, 1.8L Capacity",
        two: "Food Grade Stainless Steel Body",
        three: "Boil Dry protection, Auto shutoff",
        four: "Red Indicator Light, Cordless Kettle",
        five: "Push button to open up the Lid",
      },
    ],
    description: [
      {
        one: "Heating Element: Concealed",
        two: "Suitable For: Water, Tea & Soups",
        three: "Features: Concealed Heating Element Cordless Operation",
        four: "Power Consumption: 1200 Watt",
        five: "Safety Locking Lid: YES",
        six: "Auto On/Off Function: YES",
        seven:
          "This feature automatically switches off the heating element when there isn’t enough water in the kettle, protecting the kettle against damage. Smartly turns off to save electricity once the water boils, the kettle automatically shuts off. This cuts down your waiting time and also saves electricity. So, all you do is just pour water and leave the rest to the kettle. Food grade material that lasts long 304 stainless steel kettle body ensures safe and clean of the water, you can rest assured to drink/consume. Visible mark to note the water level. The kettle has a water level marked on its body, to give an accurate measurement of the level of water.",
      },
    ],
  },
  {
    id: 31,
    imglink:
      "https://www.reliancedigital.in/medias/Hammer-PULSE-3-0-Smart-Watch-492849894-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NTc2NnxpbWFnZS9qcGVnfGltYWdlcy9oOTAvaGVhLzk4MTQ3MTk3MjU1OTguanBnfDIwNmE0ZTYxZWZjODMwMDUxZTBiNWE0ZTM4YzFhODIzNDBkM2FlNmUzZTliNDIyY2I2ZjI5YWMxOGMzYzkwZmE",
    name: "Hammer Pulse 3.0 Bluetooth Calling Smartwatch with Honeycomb Design (Black)",
    MRP: 22900,
    MRPx: "₹22,900",
    brand: "Hammer",
    dealprice: 15490,
    dealpricex: "₹15,490",
    discount: 32,
    discountx: "32%",
    saveprice: 7410,
    savepricex: "₹7,410",
    cashback: "yes",
    Reviews: 1549,
    Star: 4,
    img1: "https://www.reliancedigital.in/medias/Hammer-PULSE-3-0-Smart-Watch-492849894-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxODYyNHxpbWFnZS9qcGVnfGltYWdlcy9oMDcvaDM2Lzk4MTQ3MTk3OTExMzQuanBnfDMyMTE0ZWZkYTRmZTk2ZmNmMTY1YzBlYWFhM2Q5Mzc2MGQwOGJkZTkzYzEzMGUyMGY0YzM2YTg3MDA5MGZiODU",
    img2: "https://www.reliancedigital.in/medias/Hammer-PULSE-3-0-Smart-Watch-492849894-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMjIxMXxpbWFnZS9qcGVnfGltYWdlcy9oNGUvaDVlLzk4MTQ3MjAxMTg4MTQuanBnfDhmZGVhYjEwMGNlYmRkNGU5NmY4Mzc0YmQyODcwNzU3Yjg0YTAyYzMxMWMzYzI2ZDI3NGY4MWVkNmVjMjZmYzc",
    img3: "https://www.reliancedigital.in/medias/Hammer-PULSE-3-0-Smart-Watch-492849894-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMTQxMnxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDU2Lzk4MTQ3MjA0NDY0OTQuanBnfDFkOTdiOGE2NTcxNjQ1MjFlNzg4ZDFhMDQ2OTViZTBhOGIxY2YyODBiYzMxMThkMGU3ODJiY2JiZjY0OGU4MWI",
    keyFeatures: [
      {
        one: "Smooth Flowy Touch, HD Display",
        two: "Superior quality strap, Honeycomb design",
        three: "Compatible with DA FIT App",
        four: "Supports Mic and Speaker",
        five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Watch Shape: Rectangle",
        four: "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
        five: "Dial Shape: Rectangle",
        six: "Compatible Devices: Smart Phones & Android Tablet",
        seven:
          "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
      },
    ],
  },
  {
    id: 32,
    imglink:
      "https://www.reliancedigital.in/medias/Fire-Boltt-BSW020-Sports-Fitness-Watches-492575002-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MzYwMjl8aW1hZ2UvanBlZ3xpbWFnZXMvaDYzL2hhOC85ODU4MDg2MjczMDU0LmpwZ3w3MjcwZWI1M2ZkNmE4YTlmODM3ZjdjOWI5Y2IwMGIwMTUzNTliOGFjYTkwOTllOWViMWVlYjYxMGI2ZDdmNWMy",
    name: "Fire-Boltt BSW020 Invincible Smart Watch with Bluetooth calling and 8GB Memory Storage (Black)",
    MRP: 19999,
    MRPx: "₹19,999",
    brand: "Fire-Boltt",
    dealprice: 15499,
    dealpricex: "₹15,499",
    discount: 23,
    discountx: "23%",
    saveprice: 4500,
    savepricex: "₹4,500",
    cashback: "Yes",
    Reviews: 1479,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/Fire-Boltt-BSW020-Sports-Fitness-Watches-492575002-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNTEzMnxpbWFnZS9qcGVnfGltYWdlcy9oMGMvaGNiLzk4NTgwODYzMzg1OTAuanBnfDdkMGI0NDUwM2M0NDNkZTlkNTQ0MDA1MDcyODNjNzExN2EwZjFlNTg5ODZiZjdmN2E0MzRhMDRlMWUxODE5ZTM",
    img2: "https://www.reliancedigital.in/medias/Fire-Boltt-BSW020-Sports-Fitness-Watches-492575002-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNzU4MHxpbWFnZS9qcGVnfGltYWdlcy9oZjIvaGI3Lzk4NTgwODc2NDkzMTAuanBnfDUwZTlmZmJhZmNmMjc3ZjBmMjU5ZTAwOWIxMTQwOWE3N2M0ZTA2NTkxMGUyZmQzMzM5NjY1YjhmY2IyMGZiYzY",
    img3: "https://www.reliancedigital.in/medias/Fire-Boltt-BSW020-Sports-Fitness-Watches-492575002-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMzgxNnxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaGU3Lzk4NTgwODg2MzIzNTAuanBnfDU0ZDVlZGIwOWFhZjQzMjQzMjdlZjQ3NTE3NWE3YTUzNjBlMzNmOTNkYzVlNGFmZmZlODZkZjcyY2QwN2IxNDY",
    keyFeatures: [
      {
        one: "Smooth Flowy Touch, HD Display",
        two: "Superior quality strap, Honeycomb design",
        three: "Compatible with DA FIT App",
        four: "Supports Mic and Speaker",
        five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Watch Shape: Rectangle",
        four: "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
        five: "Dial Shape: Rectangle",
        six: "Compatible Devices: Smart Phones & Android Tablet",
        seven:
          "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
      },
    ],
  },
  {
    id: 33,
    imglink:
      "https://www.reliancedigital.in/medias/Fire-Boltt-Smartwatch-BSW001-Black-491996737-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzk2Nzl8aW1hZ2UvanBlZ3xpbWFnZXMvaDA1L2hjZC85NTY2OTg0ODMxMDA2LmpwZ3wxYjlhMjIyOTQ5YzY4ZWQ3ZDBkZDA1ZmRlYTBiMDc2MTBlZWQ5MjU2YjExODIyY2NiMWUxZmY3MzAzYWMzYWFm",
    name: "Fire-Boltt BSW001 Smart Watch with SPO2, Heart Rate, BP, Fitness and Sports Tracking, Black",
    MRP: 13990,
    MRPx: "₹13,990",
    brand: "Fire-Boltt",
    dealprice: 9990,
    dealpricex: "₹9,990",
    discount: 57,
    discountx: "57%",
    saveprice: 4000,
    savepricex: "₹4,000",
    cashback: "no",
    Reviews: 3659,
    Star: 4,
    img1: "https://www.reliancedigital.in/medias/Fire-Boltt-Smartwatch-BSW001-Black-491996737-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w0NDA5fGltYWdlL2pwZWd8aW1hZ2VzL2hjNC9oMTIvOTU2Njk4NDg5NjU0Mi5qcGd8Y2MwYWE1ZTIxN2IyODkyZTVmNDQ1ZDQ4YjFhMzg4NDk4ZTJkNDk4YjAzZDE5MmY3ZGQzZDY5NjY5NmIzMjMxNQ",
    img2: "https://www.reliancedigital.in/medias/Fire-Boltt-Smartwatch-BSW001-Black-491996737-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMjIxM3xpbWFnZS9qcGVnfGltYWdlcy9oYTkvaDRkLzk1NjY5NzUyNjI3NTAuanBnfDRhNDgzYzk4NGJhZTg2NTI1N2IxYThkYWQyYzVlMDVlOGNmODJkZGI5MTZjMGY5ZDQ2OWEyMWE3YzUwYWQ3YzM",
    img3: "https://www.reliancedigital.in/medias/Fire-Boltt-Smartwatch-BSW001-Black-491996737-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNzY0OHxpbWFnZS9qcGVnfGltYWdlcy9oOWUvaDA1Lzk1NjY5NzY5MDExNTAuanBnfDY0NDdkNmE5NGFlYzFhMmYzZTQ1ZjY0NmE3ODhlM2I4MTIyNzE4ZTQ0YWUwNDZjMThjOWEyYzY4NjFiNGE0Yjk",
    keyFeatures: [
      {
        one: "Smooth Flowy Touch, HD Display",
        two: "Superior quality strap, Honeycomb design",
        three: "Compatible with DA FIT App",
        four: "Supports Mic and Speaker",
        five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Watch Shape: Rectangle",
        four: "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
        five: "Dial Shape: Rectangle",
        six: "Compatible Devices: Smart Phones & Android Tablet",
        seven:
          "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
      },
    ],
  },
  {
    id: 34,
    imglink:
      "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Smartwatch-492403641-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MTI2M3xpbWFnZS9qcGVnfGltYWdlcy9oNTIvaDE3Lzk4NTIzMTczMzU1ODIuanBnfDM2MWVlZjgwYjJiYzVmYjJkM2Q3N2FjNWNkZTZhYTlmNmE3ODhlMTAxMDVhMDJhZjU3Y2U0YThmZmY1MGU3MjE",
    name: "Fire Boltt Ninja Dial Smartwatch, Navy Blue",
    MRP: 18499,
    MRPx: "₹18,499",
    brand: "Fire Boltt",
    dealprice: 11490,
    dealpricex: "₹11,490",
    discount: 38,
    discountx: "38%",
    saveprice: 7010,
    savepricex: "₹7,010",
    cashback: "no",
    Reviews: 6589,
    Star: 5,
    img1: "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Smartwatch-492403641-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNzQ0fGltYWdlL2pwZWd8aW1hZ2VzL2gyYS9oNzcvOTg1MjMxNzQwMTExOC5qcGd8NDE2MTY5NjkxY2FiODgwYWQ4ODEyMDBmNjE1MDBkYzAzZWVjY2QxZWNmMDljZTE0Y2NhMjUzZTM4ZWQ1ODdjNQ",
    img2: "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Smartwatch-492403641-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3w0MzAwfGltYWdlL2pwZWd8aW1hZ2VzL2hmNy9oMjcvOTg1MjMxNzcyODc5OC5qcGd8NTNiNGY3NDRiNWZlNzAyOGViN2YyNDk3NGUzZTg5MWVmNGFlODliMmI3MDhkM2Q3ZWE5ZTdiZWVhZTkxMzI2MA",
    img3: "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Smartwatch-492403641-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzNDUzfGltYWdlL2pwZWd8aW1hZ2VzL2hhYS9oM2IvOTg1MjMxODA1NjQ3OC5qcGd8NTc0NDhlNjM1YTE1YTVlN2FkZDMwMjQ0OTkwNTliMmNjODZlYTNhNzlmYTYyZjlhYjRlYWQzOTIwNjdhNmQ4NQ",
    keyFeatures: [
      {
        one: "Smooth Flowy Touch, HD Display",
        two: "Superior quality strap, Honeycomb design",
        three: "Compatible with DA FIT App",
        four: "Supports Mic and Speaker",
        five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Watch Shape: Rectangle",
        four: "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
        five: "Dial Shape: Rectangle",
        six: "Compatible Devices: Smart Phones & Android Tablet",
        seven:
          "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
      },
    ],
  },
  {
    id: 35,
    imglink:
      "https://www.reliancedigital.in/medias/Noise-Colorfit-Grande-Smart-Watch-492850519-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MDMwNXxpbWFnZS9qcGVnfGltYWdlcy9oZmIvaDIyLzk4NDMyNjM3OTkzMjYuanBnfDgxNzU4ZTNlMTliMWI2ZTdlMTFiMWU3ODdiZDkwNmExYWZjOTYwYTlhZjk5MGRhODhmODAyZmE1ZDA4NjhhNjE",
    name: "Noise Colorfit Grande Smart Watch, Jet Black",
    MRP: 39990,
    MRPx: "₹39,990",
    brand: "Noise",
    dealprice: 24990,
    dealpricex: "₹24,990",
    discount: 38,
    discountx: "38%",
    saveprice: 10000,
    savepricex: "₹10,000",
    cashback: "no",
    Reviews: 256,
    Star: 2,
    img1: "https://www.reliancedigital.in/medias/Noise-Colorfit-Grande-Smart-Watch-492850519-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxODk4MnxpbWFnZS9qcGVnfGltYWdlcy9oNjUvaDViLzk4NDMyNjM4NjQ4NjIuanBnfDgyNDBhOTMxMTRiNGYzNzVlNzg5MThiNjg5YTUzNzAxZWNjMzA2YzJmNTVmMGIyMjEyZTQzMjdjNDAyZDg2ZWM",
    img2: "https://www.reliancedigital.in/medias/Noise-Colorfit-Grande-Smart-Watch-492850519-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMjg3NHxpbWFnZS9qcGVnfGltYWdlcy9oNDkvaDA3Lzk4NDMyNjQ4NDc5MDIuanBnfDQ3ZTg5NGRiZDNmYTViNWIwMjk2ZDMxZGU1MjAzZWI5MzEwNjhkNWVjOGM4ODEyMjNiMGNhNzc1YzhmZDZiNjk",
    img3: "https://www.reliancedigital.in/medias/Noise-Colorfit-Grande-Smart-Watch-492850519-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMzE0NnxpbWFnZS9qcGVnfGltYWdlcy9oMGQvaDUxLzk4NDMyNjY4MTM5ODIuanBnfDJmNWRiODQ1ZjNlNTI3OGZjZDQ1NGQ5M2JiNjExNjNiNmMzZWUwMzAzMjQ2Y2NhMGI4N2I2ZGU4NGFhNGQ4OTk",
    keyFeatures: [
      {
        one: "Smooth Flowy Touch, HD Display",
        two: "Superior quality strap, Honeycomb design",
        three: "Compatible with DA FIT App",
        four: "Supports Mic and Speaker",
        five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Watch Shape: Rectangle",
        four: "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
        five: "Dial Shape: Rectangle",
        six: "Compatible Devices: Smart Phones & Android Tablet",
        seven:
          "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
      },
    ],
  },
  {
    id: 36,
    imglink:
      "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574195-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDY5NjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDZhL2gwYy85NzU1Nzc4MzUxMTM0LmpwZ3w1N2Y0YmQzZTZiZGE5MjZlNWNmZjM2MDI4MmU3M2RmZTViZmExOWI0ZjYyZTE0MzZlOGNlODBkYjljMzY1NzNi",
    name: "boAt Flash RTL 3.3 cm (1.29 inch) Smart Watch with Customizable Watch Faces, Lightning Black",
    MRP: 21999,
    MRPx: "₹21,999",
    brand: "boAt",
    dealprice: 13999,
    dealpricex: "₹13,999",
    discount: 36,
    discountx: "36%",
    saveprice: 8000,
    savepricex: "₹8,000",
    cashback: "no",
    Reviews: 1789,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574195-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNDIxNXxpbWFnZS9qcGVnfGltYWdlcy9oZmEvaDk4Lzk3NTU3Nzg0MTY2NzAuanBnfDVlYzRiNzU2NTk3NTU2ZmZkNzBhNmZjOWYzYTViMzAxNGEzNjdmYmUxYzVlODQ3MDVjY2RkZDAyNGRiZWUyNzM",
    img2: "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574195-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMzQ0N3xpbWFnZS9qcGVnfGltYWdlcy9oMWIvaGIxLzk3NTU3NzkzOTk3MTAuanBnfDNhNDhiZjc1NDY4YjNkZjVjZmRlZTJmZDlmOTUxYTUyMDVjOGFjZWY2NjUxZGYxM2Q3Y2U4ZmQxZTlmOTVlZjc",
    img3: "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574195-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNTA2M3xpbWFnZS9qcGVnfGltYWdlcy9oYzcvaDgwLzk3NTU3ODAzODI3NTAuanBnfGIwOTRiODhkYTcyODQ3YWNiYTcyYzhhMThjZTI4YmQ0NzY0OTQ2NWNkZGRhZWVmOWQ3NmMwYmUwNzgwYzgwZTY",
    keyFeatures: [
      {
        one: "Smooth Flowy Touch, HD Display",
        two: "Superior quality strap, Honeycomb design",
        three: "Compatible with DA FIT App",
        four: "Supports Mic and Speaker",
        five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Watch Shape: Rectangle",
        four: "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
        five: "Dial Shape: Rectangle",
        six: "Compatible Devices: Smart Phones & Android Tablet",
        seven:
          "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
      },
    ],
  },
  {
    id: 37,
    imglink:
      "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzg1NDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDdlL2hlMy85ODE3NTExODIxMzQyLmpwZ3w3NDUzYzgzYzA4MWY2MTBlODk4Nzg5M2I2MjVjMTFiYjA1N2JkYmY1MDBiMjA2MzQyNjI3NzEwZmZkNjY5NjFi",
    name: "Fire-Boltt Ninja Pro Max Smart Watch, Black",
    MRP: 24999,
    MRPx: "₹24,999",
    brand: "Fire-Boltt",
    dealprice: 14999,
    dealpricex: "₹14,999",
    discount: 40,
    discountx: "40%",
    saveprice: 10000,
    savepricex: "₹10,000",
    cashback: "no",
    Reviews: 989,
    Star: 4,
    img1: "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNjAyNnxpbWFnZS9qcGVnfGltYWdlcy9oNjYvaDNhLzk4MTc1MTE4ODY4NzguanBnfGYyMWMyNzJjNjQzOTE0YTY2OWRjZmQ3Y2NiY2UxMWViNWRlNDFkMWE5YzZiOGY1NjQzNzM0N2E2MmEyMTU3ZTI",
    img2: "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMTk0NHxpbWFnZS9qcGVnfGltYWdlcy9oN2UvaDk2Lzk4MTc1MTM1MjUyNzguanBnfDg1NDdkNDA1YWE4YjhmNjkzZTJkNzI3ZmVkMjc3Nzg3ZTlhOWE5ZWQ0YzNlNDExYjQ5ZGM3ZmQ3OGIwYjY0YzM",
    img3: "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMDI5NHxpbWFnZS9qcGVnfGltYWdlcy9oZjEvaDliLzk4MTc1MTQxODA2MzguanBnfGU1NDJjNWJjNDM0YjQwNmU5ZDBmMDI1Y2NmYjlmNzU2NzU2MDI5NzlhZjRmMzYyNGZkZDliZjQ3YzU0ZjUxYzY",
    keyFeatures: [
      {
        one: "Smooth Flowy Touch, HD Display",
        two: "Superior quality strap, Honeycomb design",
        three: "Compatible with DA FIT App",
        four: "Supports Mic and Speaker",
        five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Watch Shape: Rectangle",
        four: "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
        five: "Dial Shape: Rectangle",
        six: "Compatible Devices: Smart Phones & Android Tablet",
        seven:
          "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
      },
    ],
  },
  {
    id: 38,
    imglink:
      "https://www.reliancedigital.in/medias/Apple-MTF32HN-A-Smart-Watches-491488097-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NDY2MnxpbWFnZS9qcGVnfGltYWdlcy9oMGQvaGRjLzkxOTY1ODA5Mjk1NjYuanBnfGMxMGQxNDEwZTgwM2Y2YjI3NTBhN2QxZGE3YzRlMjM3MTBlN2UzOWE4ZTFiOWE0OWZlOGI2MzMyOThmYjlkZGE",
    name: "Apple Watch Series 3 GPS - 42 mm Space Grey Aluminium Case with Black Sport Band",
    MRP: 33999,
    MRPx: "₹33,999",
    brand: "Apple",
    dealprice: 26999,
    dealpricex: "₹26,999",
    discount: 21,
    discountx: "21%",
    saveprice: 7000,
    savepricex: "₹7,000",
    cashback: "Yes",
    Reviews: 79,
    Star: 2,
    img1: "https://www.reliancedigital.in/medias/Apple-MTF32HN-A-Smart-Watches-491488097-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTczfGltYWdlL2pwZWd8aW1hZ2VzL2g4YS9oNDQvOTE5NjU4MDk5NTEwMi5qcGd8M2I5MDRhNjM0NDdmNTcwNDA3MWVlNjhiNGUxNTg4NDI5YjQxNzcxZjFjYjFlZWQyZjRhZDQ2ZTA0ZjE5NDNmZA",
    img2: "https://www.reliancedigital.in/medias/Apple-MTF32HN-A-Smart-Watches-491488097-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNTE2fGltYWdlL2pwZWd8aW1hZ2VzL2hmNi9oMDUvOTE5NjU4MTMyMjc4Mi5qcGd8Y2U2MWM1Mjg2ZjQzNWMwNzYyZDBkOWFmYWI2ZmI0Zjg4YzZhOTllYmQ4MjhjMmIyNWFhMjJjYWI5NWMwNmE5OQ",
    img3: "https://www.reliancedigital.in/medias/Fire-Boltt-Ninja-Pro-Max-Smart-Watch-492574963-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMDI5NHxpbWFnZS9qcGVnfGltYWdlcy9oZjEvaDliLzk4MTc1MTQxODA2MzguanBnfGU1NDJjNWJjNDM0YjQwNmU5ZDBmMDI1Y2NmYjlmNzU2NzU2MDI5NzlhZjRmMzYyNGZkZDliZjQ3YzU0ZjUxYzY",
    keyFeatures: [
      {
        one: "Smooth Flowy Touch, HD Display",
        two: "Superior quality strap, Honeycomb design",
        three: "Compatible with DA FIT App",
        four: "Supports Mic and Speaker",
        five: "Heart rate monitor, Blood Pressure, Blood Oxygen",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Watch Shape: Rectangle",
        four: "Function :Body temperature, Heart Rate, Sports Mode: Walking, Running, Hiking, Cycling, Basketball, Blood Pressure, Pedometer, Sleep Monitor, Calorie Count,Oxygen Monitor",
        five: "Dial Shape: Rectangle",
        six: "Compatible Devices: Smart Phones & Android Tablet",
        seven:
          "Hammer Pulse 3.0 smart watch with calling function is powered with 220 mAh battery, which can last for 5 to 7 days of constant usage and comes with an incredible 30 days stand by time (It may vary with heavy usage). Hammer Lifestyle is known for making best quality Smart Watches for Men, Women, Boys & Girls. Pulse 3.0 has meditation mode which enables you take a step back and do some breathing exercises thereby making your health better. It also has multiple sports mode and activity tracking. This lets you play audio via inbuilt speakers and control the music from the watch itself. We created the product with care, so it can take care of your style and health",
      },
    ],
  },
  {
    id: 41,
    imglink:
      "https://www.reliancedigital.in/medias/LG-SN4-Sound-Bar-492796654-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2Mzk4MXxpbWFnZS9qcGVnfGltYWdlcy9oN2QvaDQ5Lzk4MTY2NTE4NTc5NTAuanBnfDUxM2M0ZTEzMmZkM2NlMjY2OWVjNjE3NTkwNDA4MzcwMzA0MTBlZGY1MTZjYWU0ZWUyMmU2OWQyZDc0ZmQ5Yjk",
    name: "LG SN4 300 Watts 2.1 Channel Sound Bar",
    MRP: 22900,
    MRPx: "₹22,900",
    brand: "LG",
    dealprice: 15490,
    dealpricex: "₹15,490",
    discount: 32,
    discountx: "32%",
    saveprice: 7410,
    savepricex: "₹7,410",
    cashback: "yes",
    Reviews: 1599,
    Star: 4,
    img1: "https://www.reliancedigital.in/medias/LG-SN4-Sound-Bar-492796654-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMTkzMnxpbWFnZS9qcGVnfGltYWdlcy9oYWIvaDhjLzk4MTY2NTE5MjM0ODYuanBnfDM5NmYyODJiM2QzZWRmMTljMWVjN2UxNjgyMzhjMTc3MTNhZTYxZTBiYjlhODAzYTlmOGE3MGU0YjZlODZkM2E",
    img2: "https://www.reliancedigital.in/medias/LG-SN4-Sound-Bar-492796654-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMDk3OXxpbWFnZS9qcGVnfGltYWdlcy9oMDgvaDI5Lzk4MTY2NTIyNTExNjYuanBnfGE3N2Y1YWI5OGFhMThmYWQ2MDlhN2JjY2VjMTJlYjg1YjhkYTU4OGQwZTNiNTAyYzUzMThhODI0MjM2ZDRhYTI",
    img3: "https://www.reliancedigital.in/medias/LG-SN4-Sound-Bar-492796654-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMTEzMXxpbWFnZS9qcGVnfGltYWdlcy9oZTkvaGQwLzk4MTY2ODUzNDY4NDYuanBnfGQ5N2VjZThkYWMzMGZhODJmMjUyOWZhMmY1NDRmYjZiNTQ5NWFmYzI0ZWI0YjQyNzc5MTQxMTRhYTM4ZDgwN2Q",
    keyFeatures: [
      {
        one: "Carbon Woofer",
        two: "AI Sound Pro",
        three: "Wireless Subwoofer",
        four: "TV Sound Sync",
        five: "Bluetooth v4.0 Connectivity",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Wired/Wireless: Wired & Wireless",
        four: "Technology Used: Dolby Digital",
        five: "Bluetooth: 4",
        six: "Memory Card Slot: No",
        seven:
          "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
      },
    ],
  },
  {
    id: 42,
    imglink:
      "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0OTUyMXxpbWFnZS9qcGVnfGltYWdlcy9oMWEvaDVjLzk1MTQ2NjgwNjQ3OTguanBnfGNiYjI4OTYyMWM3MzMzNDc3NTI3ZmJiNTIxZGU0N2M5NWU3MDk0YjhmZmY4MGUyY2U1MTAyMTJkN2MzOWUwMGM",
    name: "Infinity (JBL) Cinebar W200 2.1 Channel Bluetooth Sound Bar with Wireless Sub Woofer (160W Peak Power, Deep Bass Output)",
    MRP: 19999,
    MRPx: "₹19,999",
    brand: "Infinity",
    dealprice: 15499,
    dealpricex: "₹15,499",
    discount: 23,
    discountx: "23%",
    saveprice: 4500,
    savepricex: "₹4,500",
    cashback: "Yes",
    Reviews: 339,
    Star: 2,
    img1: "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMDY2M3xpbWFnZS9qcGVnfGltYWdlcy9oMTMvaDMwLzk1MTQ2NjgxMzAzMzQuanBnfDUwM2JlZGQ3ODY1NDFkZjFkOTQ5ZTcyZTRhYjFmNmJjZjBiMWVmZDczYzYzYzIwYzVmYTE4MGEwODUyZWQwYzE",
    img2: "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMTg0N3xpbWFnZS9qcGVnfGltYWdlcy9oNmUvaGViLzk1MTQ2Njg0NTgwMTQuanBnfGU2NGI0Y2U2YjhjMWRkN2QyOWYyM2NiZjUyNTg4MTU4YzFjMDE5Njc5OWQyN2QwZGFlNjA3NzMzOWViYzM5NzY",
    img3: "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMTE1NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaDZlLzk1MTQ2Njg3ODU2OTQuanBnfDFkY2YwYTI1YTU2NjVlZDBhNWY1YTY2MTEyMjVmYmVmNmQ0YWQ5N2E4NmNkMzI0ZGExNTNjMmFhMTNkY2E0YTU",
    keyFeatures: [
      {
        one: "Carbon Woofer",
        two: "AI Sound Pro",
        three: "Wireless Subwoofer",
        four: "TV Sound Sync",
        five: "Bluetooth v4.0 Connectivity",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Wired/Wireless: Wired & Wireless",
        four: "Technology Used: Dolby Digital",
        five: "Bluetooth: 4",
        six: "Memory Card Slot: No",
        seven:
          "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
      },
    ],
  },
  {
    id: 43,
    imglink:
      "https://www.reliancedigital.in/medias/Sony-5-1-CH-Soundbar-Home-Theatre-S20R-Black-491666475-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMzI0NDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY4L2hjMi85MzAxMjcwOTg2NzgyLmpwZ3xkNjU3MDhjYTk5N2U2YTlhNGZjYjI0NjlmNjM0ZDYwOTdiMmVjNWJlMzc0N2Q4Yzg5OWU2MWQ5MDk3ZjFmNWM1",
    name: "Sony HT-S20R 400 watts 5.1 Channel Dolby Digital Soundbar Home Theatre System(Bluetooth Connectivity,USB Connectivity)",
    MRP: 13990,
    MRPx: "₹13,990",
    brand: "FSony",
    dealprice: 9990,
    dealpricex: "₹9,990",
    discount: 57,
    discountx: "57%",
    saveprice: 4000,
    savepricex: "₹4,000",
    cashback: "no",
    Reviews: 935,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/Sony-5-1-CH-Soundbar-Home-Theatre-S20R-Black-491666475-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxODA5OHxpbWFnZS9qcGVnfGltYWdlcy9oMjYvaGMzLzkzMDEyNzEwNTIzMTguanBnfDc5ZjMxNmE2MzJjZTViYzE3ZDZlMTY4MGRjN2FlOGFiZTUxMzIxOWExOGE2NDJiOGQ4OTY3YTdlNzc1MDI5ZWM",
    img2: "https://www.reliancedigital.in/medias/Sony-5-1-CH-Soundbar-Home-Theatre-S20R-Black-491666475-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxODkzM3xpbWFnZS9qcGVnfGltYWdlcy9oNzIvaGFmLzkzMDEyNjg0MzA4NzguanBnfDFkYWU3N2Y2MDA0ZWE1NjQ4MTM0M2YyYzI1NTFkNTMxYWQ2YTk5YzgyMTA0ZjlhMWZiYTlkMjdmNjc2YjM3MDQ",
    img3: "https://www.reliancedigital.in/medias/Sony-5-1-CH-Soundbar-Home-Theatre-S20R-Black-491666475-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMzEwNHxpbWFnZS9qcGVnfGltYWdlcy9oYzMvaDRjLzkzMDEyNjk0MTM5MTguanBnfDMwNjkxZjE0MDU3NTM5MzE2NjNjY2IzYzhlYzZkMGU1NjA0NGE2ZjEwZjc3OTY0NGE5MTBjZTk2YzFmNDgwM2E",
    keyFeatures: [
      {
        one: "Carbon Woofer",
        two: "AI Sound Pro",
        three: "Wireless Subwoofer",
        four: "TV Sound Sync",
        five: "Bluetooth v4.0 Connectivity",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Wired/Wireless: Wired & Wireless",
        four: "Technology Used: Dolby Digital",
        five: "Bluetooth: 4",
        six: "Memory Card Slot: No",
        seven:
          "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
      },
    ],
  },
  {
    id: 44,
    imglink:
      "https://www.reliancedigital.in/medias/Samsung-HW-T420-XL-TV-Speakers-and-Soundbar-491891546-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MDM0MnxpbWFnZS9qcGVnfGltYWdlcy9oMmEvaGI4Lzk1MTUzOTQyMzY0NDYuanBnfDhiODE4ZjhmOGI5ZTdkNTBlODA5NjJkNTkyMTcwZTQ5ZDA2ZDRkNGU3ZTMyNTk0ZTBjNGQxYTI5ZGM2OGIxYzQ",
    name: "Samsung HW-T420/XL 2.1 Channel Sound bar",
    MRP: 18499,
    MRPx: "₹18,499",
    brand: "Samsung",
    dealprice: 11490,
    dealpricex: "₹11,490",
    discount: 38,
    discountx: "38%",
    saveprice: 7010,
    savepricex: "₹7,010",
    cashback: "no",
    Reviews: 333,
    Star: 5,
    img1: "https://www.reliancedigital.in/medias/Samsung-HW-T420-XL-TV-Speakers-and-Soundbar-491891546-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMDMxMnxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaGM5Lzk1MTUzOTQzMDE5ODIuanBnfGNkYzkxZDlkODc0MGY2OWVjOTVjZDE1YTk2YWQzNDZlYWYzODhhYzEwYmZmYTlhMGY2MmM2ZDA5OWNiYzc0OTc",
    img2: "https://www.reliancedigital.in/medias/Samsung-HW-T420-XL-TV-Speakers-and-Soundbar-491891546-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMDIxMnxpbWFnZS9qcGVnfGltYWdlcy9oYzUvaGNhLzk1MTUzOTQ5NTczNDIuanBnfGJkOWFkM2I5M2E1MGYyM2M3NWRmZGVhMTMwM2MzNTQ1ZWNkY2U0YjljZTRhY2JlYjE5N2MzMzQzOTUxMDQ4YjY",
    img3: "https://www.reliancedigital.in/medias/Samsung-HW-T420-XL-TV-Speakers-and-Soundbar-491891546-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMDE2NXxpbWFnZS9qcGVnfGltYWdlcy9oYTMvaGQ0Lzk1MTUzOTU5NDAzODIuanBnfDY3NmE4MWIyNmIxMmUxZDhlOTgyNzEyM2QzZTFlOWE4N2RkYTEyOGM3ZWEwNmE2YTc0MDRiMDM0NGZiYWZkYzU",
    keyFeatures: [
      {
        one: "Carbon Woofer",
        two: "AI Sound Pro",
        three: "Wireless Subwoofer",
        four: "TV Sound Sync",
        five: "Bluetooth v4.0 Connectivity",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Wired/Wireless: Wired & Wireless",
        four: "Technology Used: Dolby Digital",
        five: "Bluetooth: 4",
        six: "Memory Card Slot: No",
        seven:
          "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
      },
    ],
  },
  {
    id: 45,
    imglink:
      "https://www.reliancedigital.in/medias/Modget-MOG500BT-Soundbar-Black-492796534-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNjk3MjZ8aW1hZ2UvcG5nfGltYWdlcy9oMWIvaDg5Lzk4MDIxNTQ1MDgzMTgucG5nfDFjMGNjNzkyMGUwMGIyZGVkNDMzNGI1OWY5YjNhNTdjNzA5Y2VlNjU2MDMyYjcxMDc3MTYxMWViNzdhMmIzNWI",
    name: "MODGET 500BT 20W Wireless Bluetooth Soundbar with Built-in Microphone, Memory card ,USB, MP3 connectivity, Upto 8Hrs Playback",
    MRP: 39990,
    MRPx: "₹39,990",
    brand: "MODGET",
    dealprice: 24990,
    dealpricex: "₹24,990",
    discount: 38,
    discountx: "38%",
    saveprice: 10000,
    savepricex: "₹10,000",
    cashback: "no",
    Reviews: 548,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/Modget-MOG500BT-Soundbar-Black-492796534-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyNDU3fGltYWdlL3BuZ3xpbWFnZXMvaGY1L2g1ZC85ODAyMTU0NTczODU0LnBuZ3wxMDcyZDZmNmEyNTQ3Mjk4NjBkMjViNWRkY2JiZmI3ODEyYzMwNTE3ZmNiNzliMTI5NWM5MjBkODY5Y2U4NTI2",
    img2: "https://www.reliancedigital.in/medias/Modget-MOG500BT-Soundbar-Black-492796534-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTMyNHxpbWFnZS9wbmd8aW1hZ2VzL2hlMC9oODUvOTgwMjE0OTk4NjMzNC5wbmd8Y2JjZjY4OTZlOGVhMDU4ZjRkZGRjN2NlMWE5OGQzYzQzOWI1MmI3YjRjMzY2MzRlZTFjY2I0NDY3OWQzZjE0Zg",
    img3: "https://www.reliancedigital.in/medias/Modget-MOG500BT-Soundbar-Black-492796534-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wyMDMyMHxpbWFnZS9wbmd8aW1hZ2VzL2gwYi9oNDkvOTgwMjE1MDk2OTM3NC5wbmd8OWNjMDU4ZDk1YjQwMjNmOWIzNmNlN2ZkZjc5NzBjOTM5ZjcwZDgwZDU0NDZiNzcxODg5YTA1ODljZjRmZjM2ZQ",
    keyFeatures: [
      {
        one: "Carbon Woofer",
        two: "AI Sound Pro",
        three: "Wireless Subwoofer",
        four: "TV Sound Sync",
        five: "Bluetooth v4.0 Connectivity",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Wired/Wireless: Wired & Wireless",
        four: "Technology Used: Dolby Digital",
        five: "Bluetooth: 4",
        six: "Memory Card Slot: No",
        seven:
          "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
      },
    ],
  },
  {
    id: 46,
    imglink:
      "https://www.reliancedigital.in/medias/JBL-SB130-TV-Speakers-and-Sound-bars-491431613-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzgwNDR8aW1hZ2UvanBlZ3xpbWFnZXMvaDFkL2g4MC85MTc1MTcwODA5ODg2LmpwZ3xmMjhhNzJlZDUxODFiMzYzZGExMTU4NjBhNTE3ZjVkOWYzN2MxNTY1Zjg0YmQ2NWRiZTUzYTNkMTk5Yzk4Zjlk",
    name: "JBL Cinema SB130 2.1 Channel Soundbar with Wired Subwoofer (110 Watts, Dolby Digital, Extra Deep Bass)",
    MRP: 21999,
    MRPx: "₹21,999",
    brand: "JBL",
    dealprice: 13999,
    dealpricex: "₹13,999",
    discount: 36,
    discountx: "36%",
    saveprice: 8000,
    savepricex: "₹8,000",
    cashback: "no",
    Reviews: 2568,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/JBL-SB130-TV-Speakers-and-Sound-bars-491431613-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMTc5fGltYWdlL2pwZWd8aW1hZ2VzL2g3YS9oYTAvOTE3NTE3MDg3NTQyMi5qcGd8NWI0MjA0NWM0Mzk4MWRiNjI3ODE2Y2NlMzdlM2ZiYWE2MDBiOTRhYWEzZWVlN2RlNmI5ZGNmNWYwMDY4MzMxOA",
    img2: "https://www.reliancedigital.in/medias/JBL-SB130-TV-Speakers-and-Sound-bars-491431613-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wzMjM4fGltYWdlL2pwZWd8aW1hZ2VzL2hhOS9oYTgvOTE3NTE3MTIwMzEwMi5qcGd8NGNkNWE2ODBlYmFkNzU0ZmEyYmQ2MWE3YTRlOWJjY2VlNGI4YzFhZjlmNjVlZWNjMWI1YmNhZTBlZGZjODBjYw",
    img3: "https://www.reliancedigital.in/medias/JBL-SB130-TV-Speakers-and-Sound-bars-491431613-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTcyfGltYWdlL2pwZWd8aW1hZ2VzL2hlMC9oMDkvOTE3NTE3MTg1ODQ2Mi5qcGd8OWNkYzUwYzA1N2NiNGRkYTIyNDRlM2JmNTIzNzU2NTU0MzY3ODY1MjFlYWYxYzdlMDYzYjNkY2MzYmU0ZTczZg",
    keyFeatures: [
      {
        one: "Carbon Woofer",
        two: "AI Sound Pro",
        three: "Wireless Subwoofer",
        four: "TV Sound Sync",
        five: "Bluetooth v4.0 Connectivity",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Wired/Wireless: Wired & Wireless",
        four: "Technology Used: Dolby Digital",
        five: "Bluetooth: 4",
        six: "Memory Card Slot: No",
        seven:
          "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
      },
    ],
  },
  {
    id: 47,
    imglink:
      "https://www.reliancedigital.in/medias/Samsung-A550-TV-Speakers-and-Soundbar-492338576-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MDc0MHxpbWFnZS9qcGVnfGltYWdlcy9oYTYvaGI2Lzk2MDkwNzk2NTIzODIuanBnfGJmMjI5OTBmM2Y5MGIzM2I4ZDQyMWZkMTVlN2ViNzg4NWFmNDA2Y2Q2Zjc3OGYzY2E4Y2MwZWNjZjgyYTc0MGQ",
    name: "Samsung A550 2.1 Channel Soundbar",
    MRP: 24999,
    MRPx: "₹24,999",
    brand: "Samsung",
    dealprice: 14999,
    dealpricex: "₹14,999",
    discount: 40,
    discountx: "40%",
    saveprice: 10000,
    savepricex: "₹10,000",
    cashback: "no",
    Reviews: 458,
    Star: 4,
    img1: "https://www.reliancedigital.in/medias/Samsung-A550-TV-Speakers-and-Soundbar-492338576-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNTEwNHxpbWFnZS9qcGVnfGltYWdlcy9oZGIvaGZkLzk2MDkwNzk3MTc5MTguanBnfDg4M2M3ZDk3MjQ4OGI1YzkzYzM3NTBhY2RlZjU3YzExMjhmNjRhODI4NzMwODgwYzk1NjQ5YTk5Mjk0OGQyYzg",
    img2: "https://www.reliancedigital.in/medias/Samsung-A550-TV-Speakers-and-Soundbar-492338576-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxOTM1NHxpbWFnZS9qcGVnfGltYWdlcy9oMGUvaGQ3Lzk2MDkwODEwMjg2MzguanBnfDg1MjViNmZiYzVkYWVkZGZmYzkxYzM1NGZhNWI3YWIwYzY2MWVkOTUxZTkyNzNhYWY2OWJkNTE4Mjk2ZWIzYmY",
    img3: "https://www.reliancedigital.in/medias/Samsung-A550-TV-Speakers-and-Soundbar-492338576-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxNDEwMXxpbWFnZS9qcGVnfGltYWdlcy9oNzcvaDc2Lzk2MDkwODIwMTE2NzguanBnfDI3MTc4ZGEzYWFhMWY3NzQ3YTE2YzJkNDlmMDEwMDk2ZTc4YWJiZjA3MDlkMTFkMTI1NWYyZTY4ZDY5NDVmNjc",
    keyFeatures: [
      {
        one: "Carbon Woofer",
        two: "AI Sound Pro",
        three: "Wireless Subwoofer",
        four: "TV Sound Sync",
        five: "Bluetooth v4.0 Connectivity",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Wired/Wireless: Wired & Wireless",
        four: "Technology Used: Dolby Digital",
        five: "Bluetooth: 4",
        six: "Memory Card Slot: No",
        seven:
          "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
      },
    ],
  },
  {
    id: 48,
    imglink:
      "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0OTUyMXxpbWFnZS9qcGVnfGltYWdlcy9oMWEvaDVjLzk1MTQ2NjgwNjQ3OTguanBnfGNiYjI4OTYyMWM3MzMzNDc3NTI3ZmJiNTIxZGU0N2M5NWU3MDk0YjhmZmY4MGUyY2U1MTAyMTJkN2MzOWUwMGM",
    name: "Infinity (JBL) Cinebar W200 2.1 Channel Bluetooth Sound Bar with Wireless Sub Woofer (160W Peak Power, Deep Bass Output)",
    MRP: 19999,
    MRPx: "₹19,999",
    brand: "Infinity",
    dealprice: 15499,
    dealpricex: "₹15,499",
    discount: 23,
    discountx: "23%",
    saveprice: 4500,
    savepricex: "₹4,500",
    cashback: "Yes",
    Reviews: 639,
    Star: 3,
    img1: "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-1-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMDY2M3xpbWFnZS9qcGVnfGltYWdlcy9oMTMvaDMwLzk1MTQ2NjgxMzAzMzQuanBnfDUwM2JlZGQ3ODY1NDFkZjFkOTQ5ZTcyZTRhYjFmNmJjZjBiMWVmZDczYzYzYzIwYzVmYTE4MGEwODUyZWQwYzE",
    img2: "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-2-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMTg0N3xpbWFnZS9qcGVnfGltYWdlcy9oNmUvaGViLzk1MTQ2Njg0NTgwMTQuanBnfGU2NGI0Y2U2YjhjMWRkN2QyOWYyM2NiZjUyNTg4MTU4YzFjMDE5Njc5OWQyN2QwZGFlNjA3NzMzOWViYzM5NzY",
    img3: "https://www.reliancedigital.in/medias/Infinity-Cinebar-200-TV-Speakers-and-Soundbar-491936141-i-3-1200Wx1200H-96Wx96H?context=bWFzdGVyfGltYWdlc3wxMTE1NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaDZlLzk1MTQ2Njg3ODU2OTQuanBnfDFkY2YwYTI1YTU2NjVlZDBhNWY1YTY2MTEyMjVmYmVmNmQ0YWQ5N2E4NmNkMzI0ZGExNTNjMmFhMTNkY2E0YTU",
    keyFeatures: [
      {
        one: "Carbon Woofer",
        two: "AI Sound Pro",
        three: "Wireless Subwoofer",
        four: "TV Sound Sync",
        five: "Bluetooth v4.0 Connectivity",
      },
    ],
    description: [
      {
        one: "Display: Digital",
        two: "Size: 4.29 cm (1.69 inch)",
        three: "Wired/Wireless: Wired & Wireless",
        four: "Technology Used: Dolby Digital",
        five: "Bluetooth: 4",
        six: "Memory Card Slot: No",
        seven:
          "Discover a new level of immersive, cinematic audio experience at home with the boAt Aavante Bar 1400. The 120W RMS boAt Signature Sound powered soundbar comes with a wired subwoofer and amplifies every aspect of your entertainment. The 2.1 channel sound system provides a balanced sound and deep bass for your movies, music and even video games and you can experience the cinematic sound that revolves around you. It also offers EQ modes, viz. Music, Movies, News and 3D to suit multiple forms of entertainment. Stay plugged into the sound with an array of wired connections, USB and Bluetooth v5.0 wireless technology. Bring your home to life with the boAt AAVANTE Bar 1400.",
      },
    ],
  },
];
localStorage.setItem("products", JSON.stringify(products));


// pin-code
let userPinCode = document.querySelector(".user-pin-code");
let popUp = document.querySelector(".pop-up");
let inputScreen = document.querySelector("#pinCode");
let closeBtn = document.querySelector(".close");
let submitBtn = document.querySelector(".apply");
let foundMsg = document.querySelector(".found-msg");
let errorMsg = document.querySelector(".error-msg");
let inputLabel = document.querySelector(".txt-input label");

userPinCode.addEventListener("click", () => {
  popUp.classList.remove("inactive");
  inputScreen.value = "";
  errorMsg.innerHTML = "";
  inputScreen.classList.remove("alert");
  inputLabel.classList.remove("alert");
});

closeBtn.addEventListener("click", () => {
  popUp.classList.add("inactive");
});

// pin-code
submitBtn.addEventListener("click", () => {
  if (inputScreen.value.length < 6) {
    popUp.classList.remove("inactive");
    errorMsg.innerHTML = `Please enter correct PIN Code`;
    inputScreen.classList.add("alert");
    inputLabel.classList.add("alert");
  } else {
    fetch(`https://api.postalpincode.in/pincode/${inputScreen.value}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((ele) => {
          // console.log(ele);
          let status = ele.Status;
          let PostOffice = ele.PostOffice;
          if (status == "Success") {
            PostOffice.forEach((e) => {
              // console.log(e);
              let PinCode = `${e.District} ${e.Pincode}`;
              foundMsg.innerText = PinCode;

              localStorage.setItem("location", PinCode);
            });
            popUp.classList.add("inactive");
          } else if (status == "Error") {
            popUp.classList.remove("inactive");
            errorMsg.innerText = `Invalid Pincode`;
            inputScreen.classList.add("alert");
            inputLabel.classList.add("alert");
          }
        });
      });
    errorMsg.innerHTML = `<div class="loader"></div>`;
  }
});

inputScreen.addEventListener("focus", () => {
  errorMsg.innerHTML = "";
  inputScreen.classList.remove("alert");
  inputLabel.classList.remove("alert");
});

// get user location after page reload if its present in localstorage
function getLocation() {
  if (localStorage.getItem("location") != null) {
    foundMsg.innerHTML = localStorage.getItem("location");
  }
}
window.onload = getLocation();


// slider js
const slides = document.getElementsByClassName("slide");
const slider__btns = document.querySelectorAll(".slider__navigation__btn");
const slides2 = document.getElementsByClassName("vivo__galaxy__slide");

// console.log(slider__btns);
let flag = 0;
let currentSlide = 1;
slider__btns.forEach((element) => {
  // console.log(element);
});

function controller(x) {
  flag = flag + x;
  slidesShow(flag);
}

slidesShow(flag);

function slidesShow(num) {
  if (num == slides.length) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for (let y of slides) {
    y.style.display = "none";
  }
  slides[num].style.display = "block";
}

// slider-2
let flag2 = 0;
function controller2(y) {
  flag2 = flag2 + y;
  slideShow2(flag2);
}
slideShow2(flag2);

function slideShow2(num2) {
  if (num2 == slides2.length) {
    num2 = 0;
    flag2 = 0;
  }
  if (num2 < 0) {
    num2 = slides2.length - 1;
    flag2 = slides2.length - 1;
  }
  for (let y of slides2) {
    y.style.display = "none";
  }
  slides2[num2].style.display = "block";
}

let category = JSON.parse(localStorage.getItem("productCategories"));
let television = category.television;
let watches = category.watches;
let laptops = category.laptop;
let appliances = category.appliances;
let soundBars = category.soundbar;
console.log(television, watches, laptops, appliances, soundBars);

// Watches-products Slider Starts
let watchContainer = document.querySelector(".watches_slider");
watches.forEach((v) => {
  let result = `<div class="item watch_item">
                  <div class="product_image">
                      <img src="${v.imglink}" alt="smartWatch">
                  </div>
                  <a href='../HTML/product-details.html'>
                    <div class="product_title" id='${v.id}'>${v.name}</div>
                  </a>
                  <div class="review-section">
                    <span class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </span>
                    <span class="review-count">(${v.Reviews} reviews)</span>
                  </div>
                  <div class="price-section">
                    <div class="offer">
                      <span class="name">Offer Price: </span>
                      <span class="price big">${v.dealpricex}</span>
                    </div>
                    <div class="mrp">
                      <span class="name">M.R.P: </span>
                      <span class="price strike">${v.MRPx}</span>
                    </div>
                    <div class="saving-detail">
                      <span class="name">You Save: </span>
                      <span class="percent">${v.discountx}</span><span class="num">(${v.savepricex})</span>
                    </div>
                  </div>
                  <div class="offer-available-tag">Offer available</div>
                </div>`;
  watchContainer.innerHTML += result;
});

// soundbar products Slider
let soundBarContainer = document.querySelector(".soundBars");

soundBars.forEach((v) => {
  let result = `<div class="item watch_item">
                  <div class="product_image">
                      <img src="${v.imglink}" alt="smartWatch">
                  </div>
                  <a href='../HTML/product-details.html'>
                    <div class="product_title" id='${v.id}'>${v.name}</div>
                  </a>
                  <div class="review-section">
                    <span class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </span>
                    <span class="review-count">(${v.Reviews} reviews)</span>
                  </div>
                  <div class="price-section">
                    <div class="offer">
                      <span class="name">Offer Price: </span>
                      <span class="price big">${v.dealpricex}</span>
                    </div>
                    <div class="mrp">
                      <span class="name">M.R.P: </span>
                      <span class="price strike">${v.MRPx}</span>
                    </div>
                    <div class="saving-detail">
                      <span class="name">You Save: </span>
                      <span class="percent">${v.discountx}</span><span class="num">(${v.savepricex})</span>
                    </div>
                  </div>
                  <div class="offer-available-tag">Offer available</div>
                </div>`;
  soundBarContainer.innerHTML += result;
});

// appliances slider
let appliancesContainer = document.querySelector(".appliances");

appliances.forEach((v) => {
  let result = `<div class="item watch_item">
                  <div class="product_image">
                      <img src="${v.imglink}" alt="smartWatch">
                  </div>
                  <a href='../HTML/product-details.html'>
                    <div class="product_title" id='${v.id}'>${v.name}</div>
                  </a>
                  <div class="review-section">
                    <span class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </span>
                    <span class="review-count">(${v.Reviews} reviews)</span>
                  </div>
                  <div class="price-section">
                    <div class="offer">
                      <span class="name">Offer Price: </span>
                      <span class="price big">${v.dealpricex}</span>
                    </div>
                    <div class="mrp">
                      <span class="name">M.R.P: </span>
                      <span class="price strike">${v.MRPx}</span>
                    </div>
                    <div class="saving-detail">
                      <span class="name">You Save: </span>
                      <span class="percent">${v.discountx}</span><span class="num">(${v.savepricex})</span>
                    </div>
                  </div>
                  <div class="offer-available-tag">Offer available</div>
                </div>`;
  appliancesContainer.innerHTML += result;
});

// laptop products slider
let laptopContainer = document.querySelector(".laptops");

laptops.forEach((v) => {
  let result = `<div class="item watch_item">
                  <div class="product_image">
                      <img src="${v.imglink}" alt="smartWatch">
                  </div>
                  <a href='../HTML/product-details.html'>
                    <div class="product_title" id='${v.id}'>${v.name}</div>
                  </a>
                  <div class="review-section">
                    <span class="stars">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </span>
                    <span class="review-count">(${v.Reviews} reviews)</span>
                  </div>
                  <div class="price-section">
                    <div class="offer">
                      <span class="name">Offer Price: </span>
                      <span class="price big">${v.dealpricex}</span>
                    </div>
                    <div class="mrp">
                      <span class="name">M.R.P: </span>
                      <span class="price strike">${v.MRPx}</span>
                    </div>
                    <div class="saving-detail">
                      <span class="name">You Save: </span>
                      <span class="percent">${v.discountx}</span><span class="num">(${v.savepricex})</span>
                    </div>
                  </div>
                  <div class="offer-available-tag">Offer available</div>
                </div>`;
  laptopContainer.innerHTML += result;
});

// slider - code
function next(x) {
  let ele = x.parentElement.parentElement.children[0];
  let item = ele.getElementsByClassName("item");
  ele.append(item[0]);
}

function prev(x) {
  let ele = x.parentElement.parentElement.children[0];
  let item = ele.getElementsByClassName("item");
  ele.prepend(item[item.length - 1]);
}



// showDetails
let productContainer = [...document.querySelectorAll(".product-slider")];
function showDetails(e) {
  if (e.target.classList[0] == "product_title") {
    let id = e.target.id;
    sessionStorage.setItem("productId", id);
  }
}
productContainer.forEach((v) => {
  v.addEventListener("click", showDetails);
});

