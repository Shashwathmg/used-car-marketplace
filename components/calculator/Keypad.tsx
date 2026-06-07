import CalcButton from "./CalcButton";

interface Props {
  appendValue: (
    value: string
  ) => void;

  calculate: () => void;

  clear: () => void;

  backspace: () => void;
}

export default function Keypad({
  appendValue,
  calculate,
  clear,
  backspace,
}: Props) {
  return (
    <div className="grid grid-cols-4 gap-4 mt-6 pb-4">
      <CalcButton
        value="C"
        onClick={() => clear()}
        className="bg-red-500 text-black"
      />

      <CalcButton
        value="⌫"
        onClick={() => backspace()}
      />

      <CalcButton
        value="%"
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="/"
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="7"
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="8"
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="9"
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="*"
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="4"
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="5"
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="6"
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="-"
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="1"
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="2"
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="3"
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="+"
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="0"
        onClick={(value) =>
          appendValue(value!)
        }
        className="col-span-2"
      />

      <CalcButton
        value="."
        onClick={(value) =>
          appendValue(value!)
        }
      />

      <CalcButton
        value="="
        onClick={() => calculate()}
        className="bg-black text-black"
      />
    </div>
  );
}