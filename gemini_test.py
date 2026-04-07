from flask import Flask, request, jsonify, render_template
from flask_cors import CORS # Buni qo'shing

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    user_question = data.get("question", "").lower()
    # ... mantiqiy qism ...
    return jsonify({"answer": answer})

    # Kengaytirilgan birinchi yordam ma'lumotlar bazasi
    responses = {
        "salom": "Salom! Men sizga birinchi yordam ko'rsatish bo'yicha ma'lumot bera olaman. Savolingizni bering.",
        "burun": "Burun qonaganda: Boshingizni biroz oldinga egib o'tiring, burun kataklarini 5-10 daqiqa qisib turing.",
        "kuyish": "Kuygan joyni darhol 20 daqiqa sovuq suv ostida tuting. Yog' yoki malham surtmang!",
        "hushdan ketish": "Bemorning oyoqlarini biroz ko'taring, kiyimlarini bo'shating va toza havo kelishini ta'minlang.",

        # Siz so'ragan yangi bo'limlar:
        "sovuq urish": "Sovuq urgan joyni issiq suvga (qaynoq emas!) soling yoki issiq mato bilan o'rang. Ishqalamang!",
        "nafas yetishmovchiligi": "Bemorni yarim o'tirgan holatga keltiring, kiyimlarini bo'shating. Agar nafas to'xtasa, sun'iy nafas bering.",
        "qusish": "Bemorni yonbosh yotqizing (nafas yo'li berkilmasligi uchun). Ko'p miqdorda suyuqlik (suv) bering.",
        "shoshilinch yordam": "Vaziyat og'ir bo'lsa, darhol 103 raqamiga qo'ng'iroq qiling. Bemorni tinchlantiring va xavfsiz joyga oling.",
        "suvga cho'kish": "Suvdan chiqargach, nafas yo'llarini tozalang. Agar nafas olmasa, zudlik bilan yurak-o'pka reanimatsiyasini boshlang.",
        "tutqanoq": "Bemorni qattiq urilishlardan himoya qiling, boshini yumshoq narsaga qo'ying. Og'ziga biror narsa tiqmang!",
        "yurak toxtashi": "Darhol 103 ni chaqiring. Zudlik bilan bilvosita yurak massaji va sun'iy nafas berishni boshlang (30:2 usuli).",
        "zaharlanish": "Zahar turini aniqlang. Agar hushida bo'lsa, ko'p suv ichiring va qustirishga harakat qiling (kislota bo'lmasa).",
        "jarohat": "Qonni to'xtatish uchun jarohat ustiga toza bog'lam qo'ying va bosib turing."
    }

    # Savolga javob izlash mantiqi
    answer = "Kechirasiz, bu borada aniq ma'lumotim yo'q. Iltimos, mutaxassisga murojaat qiling yoki 103 raqamiga qo'ng'iroq qiling."

    for key in responses:
        if key in user_question:
            answer = responses[key]
            break

    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run(debug=True)
