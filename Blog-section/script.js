//  Data
const softwareItems = [
  // 1
    {
      title: "Suvidha Overseas: Your Trusted Partner for Global Education Excellence",
      // sector: "Sector - Business",
      description: "Embark on the adventure of studying abroad with Suvidha Overseas, your dedicated companion for global education excellence. From personalized guidance to crafting impeccable applications, our experienced team ensures a smooth journey every step of the way. At Suvidha Overseas, we don't just guide you; we become your buddies in the quest for overseas education. Our commitment to trust, transparency, and reliability makes us the perfect choice for students ready to turn their dreams into reality. Suvidha Overseas – Where Your Overseas Education Dream Begins!",
      // price: "List Price: INR 25,200 + GST",
      imageUrl: "https://www.internationalacademy.in/assets/livetheme/images/landing_banner_new/studyabroad-banner.jpg",
    },
  
    // 2
    {
      title: "Suvidha's Top Picks: Premier International Destinations for Students",
      description:
      "Embarking on a global educational journey? Suvidha Overseas brings you the crème de la crème of international study destinations, coupled with tailored course and college recommendations. Topping the list is the United States, hosting prestigious institutions like Stanford University, MIT, and Carnegie Mellon University for Computer Science enthusiasts. For those eyeing a stellar MBA, Harvard Business School, Wharton School (University of Pennsylvania), and Stanford Graduate School of Business stand out. Engineering aficionados can explore specialties at California Institute of Technology (Caltech), Georgia Institute of Technology, and the University of Michigan. Suvidha Overseas guides you to academic excellence in the world's top destinations.",
      imageUrl: "data:image/jpeg;base64,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",
    },
  // 3
    {
      title: "Suvidha's Visa Wisdom: Navigating Processes with Ease",
      description: `Start Early:

      Advice: Initiate the process well in advance for potential delays.
      Understand Visa Types:
      
      Advice: Research and comprehend the specific visa type needed.
      Gather Comprehensive Documentation:
      
      Advice: Meticulously compile necessary documents.
      Stay Informed About Policy Changes:
      
      Advice: Regularly check for updates in visa policies.
      Utilize Professional Assistance:
      
      Advice: Consider professional guidance for a successful application.
      Financial Planning:
      
      Advice: Demonstrate clear financial capacity for stability.
      Prepare for Interviews:
      
      Advice: Practice responses to common interview questions.
      Maintain Clear Communication:
      
      Advice: Communicate openly and honestly in all interactions.
      Monitor Application Status:
      
      Advice: Regularly check your visa application status.
      Be Mindful of Timelines:
      
      Advice: Adhere to all visa application deadlines.
      Prepare for the Transition:
      
      Advice: Familiarize yourself with the host country's culture, laws, and local requirements.
      Suvidha Overseas emphasizes a meticulous and informed approach to visa processes. Tailor these tips to the specific requirements of your destination and visa type.`,
      imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYGBcaGxwbGhsbGxohHRsbIB0dHSAeIR0gICwkICApIB0aJTYlKS4wMzMzHSI5PjkyPSwyMzABCwsLEA4QHhISGjIqJCk0NDU0MzQyNDIyMjQyMjIyMDIyMjI1MjIyMjAyNDIyMjIyMjIyMjIyMjIyMDIyMjIyMv/AABEIAIoBbgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwQFBgEAB//EAEEQAAECAwUFBgMGBQMFAQEAAAECEQADIQQSMUFRBWFxgfAGEyKRobEywdEjQlKC4fEUM2JysgeSojRTc8LSQyX/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QALREAAgIBBAECBQQCAwAAAAAAAAECEQMEEiExQRNRBWFxgZEUIqHwwdEjJDL/2gAMAwEAAhEDEQA/APmgEEI4BBgRYI60EBHBFjszZUycTdokYqOHAaxKMXJ0kRlJRVtkACCEamV2UTnNPICJA7LShitZ8vpFy00/Yoerx+5kI9GxR2dkOAy1H+418olK7NSkJvKkqCRiVEsONYf6ZrtpCWqi/wDym/sYYR4qjYLRYkYS0qO4P6mErtCD/Ls8tO+459ooybIdyX2NOKOXJ1Br68F12F2Pcl/xCx4ljwP91Gu69jwaLq2bes0v4poKtEeI+lIxc3v5gZV8jQuzcMItuz/ZlE0KVNCk3SAEhg9MzGNTU5UjXLE4Rtlynb6ZiXlgEf1Y8xCpez+8X3gkovfiuJHq0LtO1LDYSUSpYXNwuoF5T6KUXbhjuiltlvtlqny7PNKrOibUISGNyuNXJN0hi3CNEfhmTJzKVL/BRLWRhxFWzWTrKpCQVMXLMI+ebZ2aTapiJQSAyVsSwAUMuYMfUdooaUB+EpHyjAbWpbQfxSk+il/URn0uGMNX6a6aHqcsngc/KZVy9hTM1I8z9IcjYSs5ieQP1i1K49fj0C0uP2OP+rn7lcnYIzmf8f1j0/YDAlC3VoRjucYRaIXDRMwhvTY66D9RP3MakV0joERLJajMmTR/WojgVGJbRyjqLo6IIRwCCSKwAeEdaCAjzQDBTHfKPER5MAjio80dIjykwAABBNlHnjkAAqEARmIYfKOM5yeABYTlwgSOq9PDD17wFxxviIxRTnpuhZTDinrdp1pC1Jr+vXQgASBSnVevKAKfT9evKHEfrClD35wALKdP2gFQxQ9IFWA66/eABTNw/aAI8oZ8+vlCzrCAWYC7DVp59fWAgAlAQQgpUsqLJSVHQAk+kW9k7NWmYPguDVZb0xiEssIK5NIai5dIqAMhG+siBLQmWMEgeeZ84iWLselJClzLxBBZIYOK8YvhYdD5CFi+K4MV9t/IrzaKeWlaSEIVrSJNmsyppZOGajgOcS7JsGoMwlvw5njF7LlgAJSAANI0R1mbLzVL8sq/RYcfFtv8Ij2GwIl4VVmo48tImXQQQQ4IqD7RDtW1ZUqZLlLV9pMLJGedToMuMTYJOT5kSilFVEwtpsokTlyiA3xSy2KD8wXHKGpmiLvtTYO8liYkeOV4g2JR99PlX8oihlWVKkghZYxxNXDZLnpnYwZd0eex3fRednJjiYN4+cUIsY/EYuezsq4ZjF3A+cLRyXqqmGpp42Vm0OxQXNXNRPVLUpRX8OBOLEEGM7tPZYlTRf2gO9TgSJhUjioFV3H1ibbdsGybQtEyYlSnQRLD0DhJSa/doxbQxFs2xAqxTrVOCjNWb0vF6qHibMqJPJtY9hjcklufDquF5PPSSbaS55N8lChZEBSgtQQh1guFGjqBOL4vGL23IUq12e7mhYJOAZSP/qNPsBC07PlhYIIlmhxACiR6NFDtKaO+s6v6lp80g/8ArHnNbOWDU74dpM62nxxy4tsum0W2z9jyi98LWWJoRlVgnMmgA9YdbNmyhdSJZSSkqLsFJqwwObKPKJNjaoLeLwAFN53BVheGSSYRMAExYCQlrrgJYuUhVReUXZQGOXnmlqczweq5PdfdtfwXx0+JZdiSr2oo7dZDLILunI5jdESbNuoUr8KVHyEX20kFUtQAJNGABJxGkZbbkuYmzTCUKDpugkEB1FhlHe+H6uWbS7pdq19aONrtLHFqNsenTLXsh2Ys0yxypi5f2iw5WkkEuScQWOIxiTbewwNZU3lMH/snDyjSbFsKEyJQCWZIqHBw1BB9YmGSsGi+SgD5EMeZeMFtdG4+X23s1apWMsrGsvxeg8XpFUxSWNCMRmOIj7IZihig8UuoAcGCuQBhdossqcnxoRMGRIB8jjElkfkW1HyIecEmWdG4/SPoNr7HSF/ApcrgbyfI19YprV2PnorLUiaNxuq8j4f+UWKcWJxZm0SU0d/YR6dZwBeFWxGmWMWS9lzJZaYlUvRxjwOB5GDVZE3FJaqkkAvg4Z9MflF8cTkrRU8iToogN8dPlCrLMKkAkMcxoRiPN4aIqJniIE6desEoRwih+kAHCIFvPd16QfHCBVAAJ8uuECa8IJccUB15dcIAFqGoy63awtXXn+8PV7+8KUnTrr5xEBJGY8+LQtWvl1plDWDdZPAKTh1w5PAMSfWvlAFPXKGrHXpAKGWBgASflAKEMX7fuIBYr1wgAWRHEDFoJ6iABaEB9V2BtKRNS0pCZagKoAAPLURZqMYSxdnZveju13UguV5p3bzG0tkwy0BgVLPhTQl1b288o5q+HLJLcpft/k1Sz+nw1ySEIdQTg5YPhFzZrGlFcVa6cNIo7BNC3QSFLQSFEAgFlEUycEMWwMX1mmH4Vcjru4xrxaHFie6Kt/MzTzynwx6RFF2n7RIsqbiWVNUPAjIPS8rQP5xfENFJ2h2VZV/b2hLiWkuQVfC71CamvvGzHt3clMrrgwaLeJNqlTzNFomqvd6EhwHoEoUzFhppoY+k7JtxnSkzDLXLJd0LBBDFswKHXfGS29bESrLJNiQmV35ACkpAUEtriC5AJxFYfsWXPsttTZlTFzpcxF+8Qo3D4q1Juh0kY1cRoyJSjf8AeCqPDNsmMdabL3M5Uv7ivHL/ALSap/KacGjYpit2/YjMl3kh5kvxp1I+8nmPUCOXq8W+DrtdG3Dk2yKRCDFrsYMpXD5xWyZgUkKBoQ8WOyT9p+U/KONpG/WX1NmV3BlL2l2lOE8y5djTNuhJStUtS6kPkGHnEVNp2vMwliWOEsf5EmLHtDsm2zJ3eWedcRdSLt9YqHcsARpGa2jtO3WVQTMtSFK/CChZHF005x7XFUopKr+dnDm2m27o3my5M8WUotCgqYQty4NC7YAZNGV28Uy0yVksEzQ54oWPpGh7JWyfOkFc8G8VEJJTdvIupYs2t6sZ3tYB/DucErlk7hfSD6GPP/Eov1kn5vo6uil+38GhQsLQFCVNXcdH2dwu7KJZRG4OHwiNZ7UlSj4e7UoqNxvhZV0ji4rqXj1msg7tJVJXeJEwkS0G8EzCsAzCfCClKUlJZgTi8ZtdqcC6GdASfO8W3P6RTm09wjHzxZv063zlXizS228wAQsjF0rCOTmM3t9DiVLKSDMnSxWYFuAbxDZYYxMsl1SASmU+ZWtYUd5DxAt3itdmQnu6FS/s3ZqJq+dY6+yOm0lR6r832cSe7Lq2pd3X0o+jKtgQkJSHIFdAdHz5QhFqmKUA+OSQn5/MxGQIk2ZGbhyKeIBQqwIcXXJoAcWO+ODDJPNNK+Pl7HWljhji3XI1FrKQFX0rQSwOBJbBtWrwhy1Bu9RhisNiA3ib8SR5gNWjVc5ZUokqJAcDwpTWl4sMS4AfdTfO2SfiHA/KL4ZaybfH+SqeO4bvJPI59frHgmEWJ+7lu/wJ50HvDo1mYG2SETJapawCCM2oa1GhEfM7BahMQFAuCAaeR9faNN2/24bNZFXT9rN+zl4O5+JQ/tT6lOsYfstZ1IkgKDEOG4l/n6xr0rdteDPnSpESZLuTpsv+q+OCxeP/ACvDlDSP2hm2pd2dLXTxJUg8Um8mj71+UAIJqpNDg7ijld/P2gSqDboQKjxiJIUojrdHE16yjs0HLNn+sAlXyr1ygA6eqDrzjyjl+0eJgeuP6VblAB5TaQCxlSvXyMGWp16wD1r0IAFKzy18j64UhauuusIe2/zhS8OPprEQFLrTiPQ59NClCvpDldPrhC1iAYlXuHgVDLDr94YoaYwtbPTA+37QAKOL8+WsCRBEV8+bQJpCA+qdoNqpsssJQ3eKBCBpqs8PUxK7PzRMs0q/MvqWkpJdlEsXTreAz3PGT2XNtE+ZMmolCZMW6Qtf8uWghiADQlqcMqmO/wAAixzZaGXaLQGWESyUoRmKgXlFg7UDYx0fSio7fJj9STdmptgVIxvJlS1GZeBvTJqvjITo/wBoFOGAZtRZybZfSFZ5saBQxAVmxcPuirsG15dulrQtBSQwWgnJ3xobpIIPMGIqpypcxrwF0PMUpBCAkGXdlorRN1cxmclSa6RmcXF0y9NNcGzsdpvggnxDHfvg7TZkzEKlrDpUClQ1BDRmbNbgWXLNHORxBYgg1GBBEaezWkTEhQ5jTrGINVyhnza2WGz2KckTZs2cZZCpckJwJN4XlEtixZIr6Ra//wBG2YkWSUeIWR/l/jF32i2fPUUTLKJQm/Apa0pvBFSGUQWYvRs90Y3b1hmIZE+1TJ09bXJUt2BOBU9G0ASCfWNUJbq55KWtp9HsU5KksmYmYUMlSkkfEAHcA0Obb4mJMZrshsE2WWorU8yYxUkHwpZ2A1NS5+kaNGMZciSlwy6N1yZa12buZypY+BbzEbq+JPInyUmJuyz9oOB9om7dsRmS3SPtEG+hsyBVP5g44scopLJtJCLkypByGNRHDzYvS1Ckum0/9m7HJ5INeSw22J61d1JISSl3JYCrElqltM4i7H7JSZJvr+1m4la8AdQnAcS53w8bYveJKGJDOovQE5CFTLZMVio8qe0bFr44r2ttt/1Fb07nSaqi9XNSn4lAc6+UYjtSl7LOarJvf7VBXyEWgEQdtIvWacNZcz/AmMU9U82SNqqZfDH6afJwy0Is62RJBMlSVgG8u8AJQui4AlKVl1EEkqOMUUWU+e1jQhIIC1AkFU13e+SQoFJch/jxqzxCs0kKPiJCdQkn0jquEpySSNGnyxxY5ZJOibYVpSgPMlgkksqXeUObbgecQ7NMSraBJUCJctNQm6PET90DVouBOU38yaf7ZSRTzjN7Ink2y0zS6rqgkXsyBQneCI0a+NYFBfI5WhbzamU35tm/s1oF8JulTKAIAxOJAfQVMMTaUeLu5oWtWgF4F/iUFJ8F0FTClaRFs0sICStkqa8i+sy77pJKgQoMoqujxYJekR5k4qUFFaSogJ7wJSLyUsVrwq6vCl8gNS/Jji9PHfk6kksmSl1ROCQAAMAGifZElEtS/vGiRqTRPIqIhOy5AmpEz7pyzpiDFmkOunwy6Deohv8Aiktp4jpENNhlu3SKtTkVbF9wpMsISlIwSAkPokNWOKU36dP0IMn99dIyX+om3jZrKQgtNm+BDYh/iUK5A+akxuMZhdubQ/jrepQLyZDoRoS/iVzOegTEyVPVLU6eYNQRvHRiBsax91KAzNTxiwnWWYlKVqQoIVVKiDdPA4Roh+3orklLsj7dnIXKvBwpCkrY1YCimOfhKt9OcJQegIcZYIIIcHF8xwgO6u4YaZj69YxKUnJ2KMdqoFR3+cCotXrygkqd/wBY9iOngGLW7Hjrn11WEql6Z+kSCnTdry63x4J8/KsIBDmu7jHAlmz4Q8DfVvpAlOPDTqkACrvDdWAXnxO/Pj00Mo3u2uvpAq69f1gAUrPDWFqT7luPWUNI666wgFGnPk8RAUofpz0hKhQjm276Q5YZoWR6Bj6V4QAKVjhu69POFKHHpxDFHB+cAcufNzAAtWPsYXBrHp0faBUHwb21hDPsHaLai7IJSkSwZRU0wgVApQDAO5rqGzjP7MtIn7Rm2iW/dBFVKDN9mlHKoJ4CNBsjbCLVKvEC8KTEGoB/+TiPLKKDtBIWVlEyYiRZAxAQwMw6XRVSuTChrG+DTVfyZJe/gUvaSf4hYsMsTJkxQMyYfhajgaJJBJVmSWekaC1y76RgFCqSahJwdjQkB2JjLo2sQhUuxSrktLlUxeWqiTR21c7o92W75a1zZkxRSRdrW+RpoBXDVtYWSPH0/I4S5LDZkyYVlklMoOGVipWLuwJXeKio/DUAOXIvLBbjLWCKjMRFNY4BFJcbSTNC0hScDGY7KbE7tc2bNJXPExaCtVaMCFDepKgeBA4s2VbTLUx+E4/WNQkAhxnWFbiml5FVuwUJgwIrtp7ZRJd0LXdu3ygIZN8skeJSbyjVpaLyjSlUvZAxWMJowm27H3VoLfy5jrRoFffT5kKG5W6N02sVvaDZxnSSlP8AMT45f94y/MCU/mfKKNRj3wouwz2SszspLJHAQ5EJs0wLQlQzESBHnX2dGzsLtCHQpOqVDzBHzg48RDg6difRjOz65apCL65qmAN2hSCzUBU2Zq0Xwtqf+5PbikexjN7HkmWgSyXJRewIABKkgOR4vhLtQEEYvFoI95hhHYmkeYz5Z72m+ieq1J/FPPGYPpFF2Ps6piZiqeNa1KJIACRUqKjQAVrEq2Luy1q0ST6Re9kdk93ZZaFyz3jXyULF5QvBQF2l4AhLpNC1CTSMevjbUfudL4Xk2KUn30izt1oMhMxCRMl3iLgUUEb7iReACUt4ncqUHjPQ3aFqExZKWCA4QAFChUVFV1RJBUok+QyhuytnrnTLqR4cVq0HzOQH6xy5y3Okd/BFY4bpeeWafYDy7MCzlSjdGpJCU8nDk5BzlFtKl3UhNTm5xJLkqLZkueZhFnQDduj7NAZGhyKuDEgHN1GoIMSniaVI5OSe6bl7i5h37uus4+Lbbt/8dtBSwXkyfAjQt8SuanPC7pG9/wBRtu/w1kUEH7Sd4EagEMo8h6kRk+wuwrxShfwgX1tia4Pk5I5AxZBW7KpM4iYlKklSbyQpJKfxJBqnmxEfSNo7VTKlJm933klQF4pZ0pU103TQpyIcM43tmdty5lqmCVIs7IlEoC7t3ChDlkhLiicc82i07LqmSibJPSxYrluxCkv4kgihYkKbGpi4iOtXZmzzkhcsKkqWAQAGyess4cA0YK3ShLmKQFhYSWvpdjwfy0pmKxa9q7dMXaVpKgRLN1ASaAUf82u8NlFLd1gBAKluXwOsLDVGBHXHfzhr6RXL2iBaDLoxSl/7nJ9mhATFcAac/J4IpDUO9vWOhQbUa0cc6x4GmJpRiKjzhgLIzTo4bd17QBNabsfluwh5Ry34dCFXTz01Z+s84AFlGL5vw+cLZtx96/vT6w5Qy4+eta/vCsxdIY5eYw8oQCk0oN7fT2gJhbXA/LD2g2euTV/aFqDjd1+sAClZcX65QnUHQ+Tw5WFM6c8oDHBuftEQErNOsOvaFKPph9Iaahh5b/pUQp69VygAWodcYBeNYYulfOAIgGXmytoqkTBMRUYKTkpOYPyORjfTEyrVLSSAuWfEl3cEZbjiCOIj5bKWxY4Rf9n9rdyu6v8AlLPi/pOF72fdwi7HOuDK/wBkqfTNJtmxGZLRKli4gzAFMGCUAFRLcboA3xIlS0pSlCAyUhgN3WcPVXOh0wIx+vRgXhxUkmm/JY68AAwYyhtnst5i7Alg+sDLQ59+uMMZxNOUXOx9oXfArDLcYqAnEaYwad0JqxlhtmX3M3vZMq/Pm3lBSgtab6UIQlCUgtLK0gPMoAmWb1Ga12WshPdrUDMSASLxUoJOBWpgLyiFmjDECgcxLHbVmWqWkpEwgiWVglN5i14AuRQFsxEaVZv4REyeuZNnqSb0xMspSCu6ApZQVuVXLvhKjgi6kUEVNUBo2jrR0J666pHWiIzI7Vs3dTyR/LmusaCZ98cyQr8x0iFZ7eharsu8os5ISQEpaiySwunAEPeqzgEjWba2f30pSA18eKWTRljDgC5SdyjGBlLkIuG48wGSAJiiVpvqKBdCiSCgBbgANXfHK1OmSk5U+f7ybMeRtV7F4I6qOCCMc00mD2dLSmbPSC7TFuWNPGo3a6OcKY6xbJEVctLWy0p/rJ/3JSr5xapj3uld4Yv5I8vqOMkvqQdst3JSSwUpCD+ZQBxpg8bex9nZiZIlomgy7gZExD3SAKp/CreAMcIyM2UVzrNLb4pr/wC1JPvH0tFilf8Abl4/gT9I52td5fojo6KThj48sopHZ2WlTTJt4j/85YN7yDqbewi8kWQXe7uCXL/AMVf3EPTUOXzLEpiWiWkBgABkBT0jwD8YxJJdGyeac+2F116QK1dZR1x15+7Rj/8AUbb/APDWRSUn7Sa6EagN4jyBH+6JlZidr2wW/aN4qKbNJUJYWQboLnxHKpBPIZCNta7IbCsWiSm/KKQiYgkunBlA1o4HAvkaVPYDZ0uZYpkhQAWXvnMlVUr3kEAfkGsWfZfahSTYrQA4dCHqC1DLL4j8Oopo90VSKm7ODtTPnrEqzSglRzV4mGpwCQNS/nB9t9o3FSkIU01BKypOKXTdHnUtoBrEK3zJmz5i0SVJMuYm8lKqlBdgWxpUAmhzdjGedS1FSyVKUXUo4k6mJDBRrBrFII0iHtO2plJfFRokDEnQfWACFtfaIkppVavhHzO7384oNiyVrm94XLFyTmo9e0K7qZOmqvveBZW5qXR7RrLFY0y0sBhRgXO/IOMYh2wJKByPIR1Th2Gj5HfhjUQVzcC/X16eOM7EY4NV8miYCyBk2eVNKN15xwhxnz1Ay9oM4aVxfDfTnHFE1DkEYcm65QAR79K88aYQCiCA+VAdc8eMMUd9a8MajGAUKmnEO448h7wAJmI4086U84XMS1Gw8/LjDFoarGrjEc/b1gFl6cK+kIBCzR8K++m6BWanTCCXnTNz6frAKHl9ejEQFqGgqP2hRw1y66yhhLF+HGAUl65H1/WABSi+fOFLScBDVjH05wsqgGSbdKSiYpCF3wmhVdKXUwvMDVgpwHyGUdkTHoeUantDs6QJfeolzFqWhRKysIIKSpN8ywkpKbyai9hmKxkgnwA5vEumVTipxpmw7M7VwkzD/wCMn/D6eWkaJSY+byluAcCOnjcbC2n3yLqv5qPi/qH4m99/GLoysz45tPa+y6kTFEXLwSlquQHA3EsTU0hai5F0YYAVPPMnrdA3WiRLvEG7RIYHIcDmcDrA0aATXAYY6+ccQIJMtsHU2Jyr1+kFd05wDPMzHh16PFnsqyylrK1Xiu8ZgSpSii/R1hD3b9BViU5M9axodKWUm8ksRn826zwhSjYGpvpvXXDs7UdnZ20xruhkZewqMu9abRMURL7wJShC1rEuYu94ylN5QASkgJSAgJqVMTGoQXD4vgeUUDONGI7RWIyJ/eSwAJygTdQCVTHAWFKAoCh1Av8AFeqwY7pogbY2cJ8pUt2JZSC5F1aapLirPQ6gkZxXmhvg0ThLa7M2I8YVZpl5LkMRRQOIUKEHeC8OAjzjVOmdGzD2oXbfN/q7tXnLA+UWaIr9thtof3S0HyUtPyiySI9x8Plu08X8jzWsVZmHsaXft8rMS5al4geIqAHoFecfSEmnXt5x857KzR/HTS15V1KEJBReN1JUtgpQdryaCvlG7lbSlkoDsZhKUBleIgKUWIcNdSqr5HdHN1Et2Rv5nRwxrHFfImhO+PDCBJ59D9Y4S2dP2ikuPTFBi51x64x8fm7ZlW3aZmTXMiX4JfhvJIBoSn+ourA4CNT/AKmbc/h7KqWk/aTnQnUI++ryIT+bdGF7PWK4hzianj+mEWQXNik/B9R2ZseSJiJ9lmAAeFaQbyFJOI1ScDuIFIqe3dhSmYickgKXRQepKcFjPBgTkyYzMuapCryFKSrVJIPmIZbLZMmqvzFlSmAc6DAMB05i4gLnTlzFlcxRUpWJOJy9qQxCYWhGsenTkoSVKLJAcmAAdoWpEtBWs0HmToIrdm2VcxffzQx+4n8KfrCbHLVapgmzA0tPwIOf9R6/XRJRAlfImVNnkATpiWFWXhkoNX8yVdNE0DVuXvQ+nOE2xLTJZ/Feln/JP+K/OJYBLlhXqmsAxdwZDkTTl+8dWks5CnBGL0B947dDNX08nECU6AtWmLdUgAEHOpbOhH1eFnDAE4NWtKZ8uUFfSa1Bx5P+n7RxRzFcOBrp9IAFLSC4cMWx61hSvUE83pjDV/FhjTcXpC1KYGlMWaoyPHnAAlScGNfo9etIUrPI5iJE1NS9Xz5QmYrWrMOvWEAlVAdDj1whKksWhywxLGny4QpWbNw94iAtVOs6/pC1hhBq9GfHCBWmsACMzClAPWHKgFesAGm2vt1QVQhUxmNBdQnRhTkIo1oCUpL+FTFsxj7QmxoSqYlK1hCVKSFLIe6CWKuUXs1EuRMMuXIUqck1XPUgpQ33+7SLpDMQpRIwLGkSbsj0Q7PZFKUAgXiQaDPf1xh0iaqXMCkKDpNCKg5HiDURbLkTZaFLVLmlK3VMmqQsCYonVmCSSeMUd44nA4bqxJcGfPjcluj2j6Dsu0C0JCpbPgQSPCrQk8aaxNWChRCSa+bPQHydsoxOwtqKkTMR3aykLo5AB+IbwFK5E7iN9LCbjJIVeDkguhhUKHLTXPCLLFhyqa+Yk4+BziBTAaNwx+cccjnr0254YlBSSCAfY4EYcjBHByXJ6z6pDLxSB+ntDGrHlJ1hiVde8DCwJssKTdULyc0FRSlYH3FkByg0vBq5ghwbzYFumTpd6YkJmg+NISoJQTUICzSYUpIClJLO+EUy/hfrjHbJOUiYhd5QCbyVocspJbJ2vJKUkK0vD70VyjfI0zWx5o8kuHFRHSIqGZLbll7ueJgHgm0O6YB/7JD8UrMJaNRtSxCdLXLNHDpP4VCqVcj6PGSs0wkeIMpJKVA4hQoR5vHG12HZLcumbMM7jXsZLtUlrZJVqgj/AGrf/wBonoERO2iWm2VX/kT/AIH5GJS13UKV+FJPkHj0fwqX/VT9rOPro/8AN9aJvYoSlpmlRQrvZijdU14rCyE3AQLwuoQ1wqUFX/hauqsNjSZnfiYZgKLiCQCQkKJJK2vLJLB1VZIqTU57sgRLscgBKZgnl2AJSpJP2pJqHT4vCWL0YPGps9qlsUpISlChLwZIUyWSlvCzKSmmB8NCI58nbs6CVIlA9awucts2b0pnR9Y6s+WG8xiv9SNsGTZu6Q5mzz3aQMbv3yBi5BCPzGESPn+3dom3W5S0l5aPDLGqUksfzKdXNou5aLqQIquz2zihDn4sVDNJORGIIEW6o0QVIrbBaCSmCSh460SA4sgByWAqS9AM4oPFa1sHEhB/3nXh1iacttpNomGTKP2YPjWPvbhu98co0VisyZaAlIYCBKxMKVLCQAKDSGx3KOAxMRD2on7NSnqhlg/2kE/8b3nHTUYgt5ef1iapIIIIxDcjFZs1ZMtIJql0EEZpN0+oziL7GiSkNjTzzzffXKOXa0Djj7+8EVjHkQXf6aQF4Z00hDFkgMQ4GBph0YBSA2NDm3XTQSnemmHp8sd8LCiMTThiePB4AFqBwwY5YtrArW+NXxw6rDD6ivrl9IVdx3eornwPtAACk/tuO/r1hC6ipdqPrpwO6GlIo2BGGYyhagz7iDXMQgFLepxFQ4zH1hKnGONIewy3+xhTYHUUfdiIAEqFKbuYzEAC/WEMXh1SFqzz1iICVhoXNxeGjQwAOsAE6w7IXMqfCnEk6a8I00i1ITfRLmJRMSlCZcyapibrJJvKBCSlIASMgSRVm7tKkiW1HUH38dYzdvxP9yv8ou2pEE7L6fOXPnqKFulMtHeTT4UEpCQqYqmaw4DOaUekBZtnpmuEqUZQJZSgyleI1ZyxP7wi1lrFIal5c8qb7xSJd0nVnLaOY0VjSO5RTIfOIoG6Kq37NCReQGu0IGY13mLDsttgynlKu3ZhopRACDUF3pdO+gNYmzPkYytpFVcT7mJHM1D9PIpI+jzJYDVcmr4n1yz/AHjiQzu+OHyP7Qqz1Qh6+Ef4xKmfEf7B7CJL2OgnasSS+P6R5/PLDKseV8Xn7xyZj+b5CGB0LplCl1fIDdrAZc/nEg/An+4+0R6JFhsbaISbij4ThufqsaOMFnzja7N/lJ4RXNEkx5jL7fsvdzkzR8Ezwr3TAKH8yR/x3xqDFV2n/wCkXxT/AJojLqYKeN2WY3UkfOe3SfDZ1aTSPNCvpCNpk/wygkh1JCEuQA6yEhycBXHjEztr/Ilf+ZH+K4r9r/8ATo/vlf5iNPwx1o5fcy6vnUR+xtuz9llFIUEhJLplm8kzO7ASLzpN0m8kEKA+ES3wj0zY96YpHe3ipKTMWsFUwywoky5YATLloJdJuijmgNYl7MUTbe6JeWZSSUfcJuCt3B98FZf+pnf2ShyuLU3C8pRbUnWMpsJ1oWzlx5s36R8P2zbTbraucLwkoUEoUktdS5CC/wB28py5zIGgj6t2qUf4K0l690uv5FR8d2AopkT1JJSq5NS4obplhw4y3RZBWyL6NHMWsqTLHhShMu8opTeWtN74FAlSZZdJUkmpDakuaFjLgPaGCLyASDGf2vb1TF/w8nE0WoZDNI+flrF1PUbhr91XsYz3ZEUUc73yEJjLfZlhEpISl98WaVQBw8oJGXWsWJUROhTwSEwIhqcYBHkJitlouzZiDmUzAGyUGO74kq84uTjFVbP+pT/4lf5GExocMTvoaV4xxsceHWseVlx+UcVh1qIRIWoj5cKwCwcQMcRkeqmG2rEdZwkYngfeEApYDGhBFU9awCs2q4p1nDl/FyMIn/X2gA8sUoQaFvnCVnAnDA/ofOHL+XzhGR6ygAFQqHLjHe2ERyaAGoB/aHpx5fKI5+LyhAAtOWIIhOurHnDFYwuZgOP0iIClkdb4AjI8YanBXWcLXlwgA//Z",
    },
  // 4
    {
      title: "Unlocking Opportunities: Suvidha's Guide to Abroad Scholarships",
      description: `Merit-Based Scholarships:

      Description: Recognize academic excellence.
      Suvidha Assistance: Guides on identifying universities and aids in the application process.
      Need-Based Financial Aid:
      
      Description: Geared towards students with financial constraints.
      Suvidha Assistance: Helps understand eligibility and facilitates the application process.
      Country-Specific Scholarships:
      
      Description: Offered to promote cultural exchange.
      Suvidha Assistance: Provides info and aids in application submissions.
      University-Specific Scholarships:
      
      Description: Universities offer programs covering tuition, accommodation, or living expenses.
      Suvidha Assistance: Guides in identifying universities with strong scholarship offerings.
      Subject-Specific Scholarships:
      
      Description: Target students pursuing specific fields of study.
      Suvidha Assistance: Explores subject-specific scholarship opportunities.
      Research and Innovation Grants:
      
      Description: Supports students involved in research projects.
      Suvidha Assistance: Identifies programs with a focus on research-oriented scholarships.
      Sports and Arts Scholarships:
      
      Description: Recognizes talent in sports or the arts.
      Suvidha Assistance: Provides info on universities offering scholarships for sports and arts.
      Government-Sponsored Scholarships:
      
      Description: Provided by governments to strengthen bilateral ties.
      Suvidha Assistance: Guides in exploring government-sponsored scholarship opportunities.
      Organization-Backed Scholarships:
      
      Description: Offered by various organizations, NGOs, and foundations.
      Suvidha Assistance: Helps identify and apply for scholarships provided by relevant organizations.
      Minority and Diversity Scholarships:
      
      Description: Promotes diversity by supporting underrepresented backgrounds.
      Suvidha Assistance: Informs about scholarships prioritizing diversity.
      Suvidha Overseas is committed to helping students explore and access diverse scholarship opportunities. Guidance includes providing information, assisting with applications, and ensuring strong alignment with scholarship criteria.`,
      imageUrl: "https://149818895.v2.pressablecdn.com/wp-content/uploads/2020/01/Study-Abroad-Scholarships.jpg",
    },
  // 5
    {
      title: "Seamless Transition: Suvidha's Commitment to Students Abroad",
      description:
      `Pre-Departure Orientation:

      What: Comprehensive sessions covering cultural nuances and academic expectations.
      Why: Prepares students mentally and practically for the upcoming transition.
      Documentation Guidance:
      
      What: Meticulous organization of necessary documents.
      Why: Minimizes challenges related to documentation for a smoother transition.
      Cultural Integration Support:
      
      What: Guidance on local customs, social etiquette, and cultural norms.
      Why: Assists students in navigating the cultural landscape for seamless integration.
      Arrival Assistance:
      
      What: Support upon arrival, including airport pickups and initial orientation.
      Why: Reduces stress associated with arriving in a new country for a more comfortable start.
      Accommodation Support:
      
      What: Assistance in finding suitable accommodation.
      Why: Ensures a stable and secure living arrangement for the initial period.
      Healthcare Guidance:
      
      What: Information on healthcare facilities and general wellness practices.
      Why: Ensures students are well-informed about healthcare resources.
      Networking Opportunities:
      
      What: Facilitation of opportunities to connect with fellow students and local communities.
      Why: Fosters a sense of community and provides valuable support for academic and social integration.
      Academic Support Services:
      
      What: Collaboration with universities for ongoing academic support.
      Why: Enhances the overall learning experience and helps students adapt to academic rigor.
      Crisis Management and 24/7 Support:
      
      What: Robust support system available 24/7 for emergencies.
      Why: Proactive assistance during critical situations.
      Regular Check-Ins:
      
      What: Ongoing sessions to address concerns and provide guidance.
      Why: Ensures overall well-being throughout the study abroad experience.
      Suvidha Overseas is committed to providing comprehensive support, guiding students through every step of their study abroad journey for a positive transition into a new academic and cultural setting.`,
      imageUrl: "https://www.mohawkcollege.ca/sites/default/files/Marketing%20and%20Communications/images/unibuddy-students-820x370.png",
    },
  
    {
      title: "Suvidha's Triumphs: Student Success Stories",
      description: `John Doe - Pursuing Computer Science at Stanford University:

      Experience: Suvidha's pivotal role in making the dream of studying at Stanford a reality.
      Key Support: Assistance in the application process, visa journey, and seamless transition to the U.S.
      Maria Garcia - MBA Graduate from INSEAD:
      
      Experience: Suvidha's instrumental expertise in pursuing an MBA at INSEAD.
      Key Support: Identifying best-fit programs, assisting with scholarship applications, and invaluable pre-departure assistance.
      Raj Patel - Environmental Science Researcher at University of Melbourne:
      
      Experience: Suvidha's role in a smooth transition to Australia for environmental science studies.
      Key Support: Guidance on visa processes, finding accommodation, and connecting with the local community.
      Aisha Khan - Arts and Design Student at Central Saint Martins:
      
      Experience: Suvidha's personalized approach in the journey to Central Saint Martins.
      Key Support: Portfolio preparation, accommodation assistance, and unwavering support in thriving in London's art scene.
      Carlos Rodriguez - Medical Student at Johns Hopkins University:
      
      Experience: Suvidha's meticulous assistance in applying to medical schools in the U.S.
      Key Support: Beyond academics - assistance with accommodation, healthcare guidance, and cultural integration.
      Elena Sokolova - Aerospace Engineering Student at TU Delft:
      
      Experience: Suvidha's crucial role in realizing the dream of studying aerospace engineering at TU Delft.
      Key Support: Guidance on university selection, visa processes, and settling in the Netherlands.`,
      imageUrl: "https://upgradcampus.com/wp-content/uploads/2023/05/Success-Speaks.jpg",
    },
  
    {
      title: "Suvidha's Cultural Navigator: A Guide to Cultural Preparedness",
      sector: "Sector - Business",
      description: `Cultural Intelligence Workshops:

      What: Interactive sessions on cultural nuances.
      Why: Instills cultural intelligence, covering communication styles and social norms.
      Cross-Cultural Communication Training:
      
      What: Focus on refining communication skills in diverse settings.
      Why: Prepares students for effective interpersonal interactions in various cultural environments.
      Country-Specific Cultural Insights:
      
      What: Tailored content providing insights into the cultural specifics of chosen destinations.
      Why: Enhances understanding of social customs, practices, and cultural nuances.
      Cultural Immersion Activities:
      
      What: Events, outings, and language exchanges for immersion in the local community.
      Why: Fosters deeper connections with the culture through firsthand experiences.
      Diversity and Inclusion Training:
      
      What: Discussions and activities cultivating an inclusive mindset.
      Why: Promotes understanding, tolerance, and the creation of an environment that celebrates differences.
      Cultural Sensitivity Seminars:
      
      What: Sessions on navigating cultural challenges with sensitivity.
      Why: Equips students with strategies for effective cross-cultural interactions.
      Peer Mentorship Program:
      
      What: Pairing new students with experienced mentors for cultural insights.
      Why: Eases the transition for incoming students through practical advice and support.
      Language Support Services:
      
      What: Resources, tutoring, and language exchange opportunities.
      Why: Enhances language proficiency for effective communication in the new environment.
      Cultural Resource Hub:
      
      What: Online hub offering articles, videos, and guides for continuous cultural awareness.
      Why: Serves as a reference point for students throughout their study abroad journey.
      Post-Arrival Check-Ins:
      
      What: Regular discussions on cultural experiences, challenges, and successes.
      Why: Personalized support for ongoing assistance in navigating cultural adaptation.`,
      price: "List Price: INr 27,000 + GST",
      imageUrl: "https://www.careeraddict.com/uploads/article/60920/how-to-develop-cultural-awareness-in-the-workplace.png",
    },
  
    {
      title: "Suvidha's Powerhouse: Exclusive University Partnerships",
      description:
      `Suvidha Overseas proudly boasts exclusive partnerships with world-renowned universities, creating an exceptional network for students. Here's a glimpse of what sets Suvidha's collaborations apart:

      Strategic Collaborations:
      
      Suvidha aligns with universities globally recognized for academic excellence and research contributions.
      Tailored Academic Programs:
      
      Access to specially crafted academic programs meeting diverse student aspirations and contemporary educational needs.
      Personalized Guidance:
      
      Beyond academics, Suvidha provides personalized support in the application process, course selection, and university life.
      Research and Innovation Opportunities:
      
      Facilitating access to cutting-edge research initiatives, state-of-the-art facilities, and collaborations with renowned faculty.
      Internship and Industry Connections:
      
      Partnerships include provisions for internships and industry connections, offering practical insights and valuable professional ties.
      Cultural and Exchange Programs:
      
      Diverse cultural and exchange programs enrich students' global perspectives, fostering a holistic educational experience.
      Scholarship Opportunities:
      
      Exclusive partnerships often bring additional benefits, including scholarship opportunities for students' financial support.
      Alumni Network Access:
      
      Upon graduation, students join a global alumni network associated with Suvidha's partner universities, providing ongoing support and valuable connections.
      Continuous Collaboration:
      
      Suvidha maintains dynamic collaboration, ensuring partnerships evolve to meet changing student needs and academic landscapes.`,
      imageUrl: "https://sloanreview.mit.edu/wp-content/uploads/2017/11/MAG-Murray-University-Partnership-1200-382x255.jpg",
    },
  
    {
      title: "Suvidha's Financial Guide for Study Abroad Success",
      description:
      `Cost Estimation:

      Suvidha helps estimate total expenses for a realistic budget covering tuition, accommodation, living, travel, and more.
      Scholarship Exploration:
      
      We support students in identifying and applying for scholarships to ease financial burdens.
      University Fee Structures:
      
      Gain insights into partner universities' fee structures for clear understanding of costs.
      Budgeting Assistance:
      
      Suvidha assists in crafting a practical budget, managing living expenses, and unforeseen costs.
      Loan Application Support:
      
      For those considering loans, Suvidha guides through the application process and repayment terms.
      Part-Time Work Opportunities:
      
      Information on part-time work opportunities and balancing work commitments with academics.
      Currency Exchange Planning:
      
      Suvidha advises on favorable times for currency exchange, minimizing impact of rate fluctuations.
      Emergency Fund Planning:
      
      Emphasis on building and maintaining an emergency fund for unexpected expenses.
      Health Insurance Guidance:
      
      Suvidha ensures a comprehensive understanding of health insurance options.
      Financial Literacy Workshops:
      
      Suvidha conducts workshops covering financial management and investment options.
      Continuous Support:
      
      Suvidha remains a consistent source of support for any financial concerns during your study abroad journey.`,

      imageUrl: "https://elan-loans-net-prod.s3.ap-south-1.amazonaws.com/Areas/CMS/UploadedFiles/Graphic/Images-Card/Blog/09ab9222-0b2c-4cbc-a169-81e65681cbe0.png",
    },
  
    {
      title: "Suvidha's Post-Graduation Career Boost",
      description: `Embarking on a study abroad journey with Suvidha is not just about academic success—it's a pathway to a thriving career. Our post-graduation career support services are tailored to ensure a seamless transition into the professional world:

      Tailored Career Counseling:
      
      Personalized sessions guide students in aligning academic achievements with career goals.
      Resume Building and Job Application Assistance:
      
      Craft impactful resumes and cover letters with Suvidha's guidance for standout applications.
      Internship and Work Placement Support:
      
      Gain practical experience through facilitated internships, boosting employability post-graduation.
      Networking Events and Workshops:
      
      Engage with industry professionals through Suvidha's networking events, seminars, and workshops.
      Interview Preparation:
      
      Confidence-building interview preparation sessions prepare students for success in job interviews.
      Industry-Specific Guidance:
      
      Navigate the job market with insights into industry trends, skill requirements, and potential career paths.
      Career Development Resources:
      
      Access a wealth of career development resources, ensuring students stay informed about job opportunities.
      Alumni Networking Opportunities:
      
      Connect with successful alumni for mentorship and advice on navigating career paths.
      Professional Development Workshops:
      
      Suvidha conducts workshops on leadership, communication, and time management for a well-rounded skill set.
      Continuous Career Guidance:
      
      Suvidha's commitment extends beyond graduation, offering continuous career guidance and support.`,
      imageUrl: "https://i0.wp.com/d3d2ir91ztzaym.cloudfront.net/uploads/2021/12/after-graduation.jpg?fit=800%2C350&ssl=1",
    },
  
    {
      title: "Suvidha's Commitment to Student Safety Abroad",
      description: `Pre-Departure Orientation:

      Equipping students with essential safety information before their arrival.
      Emergency Contact Information:
      
      Providing readily accessible emergency contacts for prompt response to unforeseen circumstances.
      Health and Travel Insurance:
      
      Guiding students in selecting comprehensive insurance plans for medical emergencies and unforeseen events.
      Local Support System:
      
      Establishing a local support network for immediate assistance during students' stay abroad.
      Safety Workshops and Resources:
      
      Organizing safety workshops and providing practical guides for navigating the new environment securely.
      Accommodation Verification:
      
      Verifying safety and security standards of student accommodations.
      24/7 Emergency Assistance:
      
      Offering round-the-clock emergency assistance through our dedicated helpline.
      Regular Check-Ins:
      
      Conducting regular check-ins to monitor academic progress, mental health, and overall satisfaction.
      Travel Advisory Updates:
      
      Staying informed about travel advisories and providing timely guidance.
      Crisis Management Plan:
      
      Having a comprehensive plan in place for swift and coordinated responses to unforeseen situations.`,
      
      imageUrl: "data:image/png;base64,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",
    },
  
    {
      title: "Suvidha's Response to Remote Learning Trends",
      description: `Virtual University Tours:

      Explore campuses and facilities virtually, overcoming travel limitations.
      Online Course Recommendations:
      
      Guidance on reputable online courses, ensuring access to quality education globally.
      Global Online Degree Programs:
      
      Connect with universities offering prestigious online degree programs for flexible learning.
      Digital Skill Development:
      
      Emphasis on courses enhancing digital proficiency for success in the digital era.
      Remote Internship Opportunities:
      
      Facilitate virtual internships to complement academic learning.
      E-Learning Platforms Recommendations:
      
      Assistance in navigating e-learning platforms for various goals.
      Online Library Resources:
      
      Provide information on online libraries, ensuring access to essential learning materials.
      Virtual Career Fairs:
      
      Organize and promote virtual career fairs for networking and job exploration.
      Remote Study Groups and Collaboration:
      
      Assist in forming virtual study groups for collaborative learning experiences.
      Digital Well-being Support:
      
      Guidance on maintaining digital well-being, promoting a healthy balance between online and offline activities.`,
      imageUrl: "https://static.toiimg.com/thumb/msid-94637838,width-1280,height-720,resizemode-4/94637838.jpg",
    },
  
    {
      title: "Suvidha's Commitment to Community Engagement",
      description: `Volunteer Opportunities:

      Connect students with local volunteer opportunities to contribute to causes they are passionate about.
      Community Partnerships:
      
      Establish collaborations with local organizations, fostering a sense of social responsibility.
      Social Impact Projects:
      
      Support students in initiating impactful projects, turning ideas into action for community development.
      Internship Placements:
      
      Assist in securing internships with social organizations, providing hands-on experience in community work.
      Cultural Exchange Programs:
      
      Promote programs that facilitate interaction between international students and local communities.
      Local Mentorship Initiatives:
      
      Connect students with local mentors for cultural insights and guidance in community engagement.
      Environmental Sustainability Initiatives:
      
      Encourage participation in initiatives promoting environmental sustainability for a healthier community.
      Participation in Community Events:
      
      Inform students about local events, fostering a sense of community and shared experiences.
      Language Exchange Programs:
      
      Facilitate language exchanges, enhancing language skills and fostering cross-cultural friendships.
      Community-Centric Workshops:
      
      Organize workshops on community engagement, emphasizing ethical considerations and positive impact.`,
      imageUrl: "https://granicus.com/wp-content/uploads/image/jpeg/blog-social-community-engagement-101-why-engage-online.jpg",
    },
  
    {
      title: "Suvidha Insights: Transformative Impact of Studying Abroad",
      description: `Studying abroad with Suvidha Overseas is more than an academic journey; it's a transformative experience that shapes individuals into globally aware citizens. Here's a glimpse into the profound impact of studying abroad:

      Cultural Adaptability:
      
      Exposure to diverse cultures fosters cultural adaptability, breaking down stereotypes, and promoting inclusivity.
      Independence and Self-Reliance:
      
      Navigating daily life in a foreign country encourages independence, self-reliance, and resilience in the face of challenges.
      Global Network Building:
      
      Suvidha facilitates the creation of a global network, connecting students with peers, cultural exchange, and alumni beyond borders.
      Enhanced Communication Skills:
      
      Engaging with linguistically diverse groups enhances communication skills, a valuable asset personally and professionally.
      Adaptation to Diversity:
      
      Exposure to diversity fosters an appreciation for differences, challenging preconceptions, and promoting inclusivity.
      Expanded Worldview:
      
      Studying abroad broadens worldviews, deepening understanding of global issues and contributing to informed citizenship.`,
      imageUrl: "data:image/jpeg;base64,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",
    },
  
    {
      title: "Suvidha Overseas: Leading the Way in Environmental and Social Responsibility",
      description: `Sustainable Operations:

      We prioritize sustainable practices, minimizing paper usage, and adopting eco-friendly technologies to reduce our environmental footprint.
      Community Engagement:
      
      Suvidha actively engages in community programs supporting education, health, and skill development, making a positive impact on society.
      Ethical Practices:
      
      Ethical business practices are non-negotiable for us. We adhere to the highest standards of integrity, transparency, and fairness.
      Environmental Awareness:
      
      We organize campaigns to raise environmental awareness, inspiring our community to adopt sustainable living practices.
      Student Education on Sustainability:
      
      Recognizing students' influence, we integrate education on environmental and social responsibility into our support programs.
      Continuous Improvement:
      
      Suvidha is committed to continuous improvement, regularly assessing practices, seeking feedback, and exploring new ways to enhance our positive impact.
      Transparency and Accountability:
      
      We maintain transparency and accountability by regularly communicating our progress to stakeholders, aligning actions with our commitment to positive change.`,
      imageUrl: "data:image/jpeg;base64,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",
    },
  
    
 
  ];
  
  function createCard(item) {
    const card = document.createElement("div");
    card.className = "col-md-4 card-container"; // Added a common class
  
    // Initially show a truncated description
    const truncatedDescription = item.description.substring(0, 110); // Adjust the character limit as needed
  
    card.innerHTML = `
          <div class="card mb-4 custom-card-height">
              <img src="${item.imageUrl}" class="card-img-top" width="400px" height="200px" alt="Cloud Software Image">
              <div class="card-body">
                  <h3 class="card-title">${item.title}</h3>
                 
                  <p class="card-text description">${truncatedDescription}...</p>
                  <a href="#" class="btn btn-primary read-more-link" style="background-color: orangered; color: white; border: 1px solid orangered; outline: none;">Read More</a>
                  <a href="#" class="btn btn-secondary read-less-link " style="display: none;">Read Less</a>
                  <p class="full-description" style="display: none;">${item.description}</p>
              </div>
          </div>
      `;
  
    // Use event delegation to handle clicks on "Read More" and "Read Less"
    card.addEventListener("click", function (e) {
      const target = e.target;
      if (target.classList.contains("read-more-link")) {
        e.preventDefault();
        const description = card.querySelector(".description");
        const fullDescription = card.querySelector(".full-description");
        const readMoreLink = card.querySelector(".read-more-link");
        const readLessLink = card.querySelector(".read-less-link");
        const image = card.querySelectorAll(".card-img-top");

        // image.style.height="500px";
  
        description.style.display = "none";
        fullDescription.style.display = "block";
        readMoreLink.style.display = "none";
        // readMoreLink.style.backgroundColor= "orangered"
        readLessLink.style.display = "inline";
  
        // Collapse all other cards
        const allCards = document.querySelectorAll(".card-container");
        allCards.forEach((otherCard) => {
          if (otherCard !== card) {
            const otherDescription = otherCard.querySelector(".description");
            const otherFullDescription =
              otherCard.querySelector(".full-description");
            const otherReadMoreLink = otherCard.querySelector(".read-more-link");
            const otherReadLessLink = otherCard.querySelector(".read-less-link");
  
            otherDescription.style.display = "block";
            otherFullDescription.style.display = "none";
            otherReadMoreLink.style.display = "inline";
            otherReadLessLink.style.display = "none";
          }
        });
      } else if (target.classList.contains("read-less-link")) {
        e.preventDefault();
        const description = card.querySelector(".description");
        const fullDescription = card.querySelector(".full-description");
        const readMoreLink = card.querySelector(".read-more-link");
        const readLessLink = card.querySelector(".read-less-link");
  
        description.style.display = "block";
        fullDescription.style.display = "none";
        readMoreLink.style.display = "inline";
        readLessLink.style.display = "none";
      }
    });
  
    return card;
  }
  
  // Add cards to the software-list
  const softwareList = document.getElementById("software-list");
  softwareItems.forEach((item) => {
    const card = createCard(item);
    softwareList.appendChild(card);
  });
  