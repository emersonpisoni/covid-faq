import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./index.css";

export function Admin() {
  const [faqs, setFaqs] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    fetchFaq();
  }, []);

  async function fetchFaq() {
    const newForm = {
      add: {
        pergunta: "",
        resposta: "",
      },
    };
    try {
      const res = await axios.get("https://trabalho-faq.herokuapp.com/faq");
      setFaqs(res.data);
      res.data.forEach((faq) => {
        newForm[faq.id] = {
          pergunta: faq.pergunta,
          resposta: faq.resposta,
        };
      });
      setForm(newForm);
    } catch (error) {
      console.log(error);
    }
  }

  async function onExcluirFaq(idFaq) {
    try {
      await axios.post(`https://trabalho-faq.herokuapp.com/faq/${idFaq}`);
      await fetchFaq();
    } catch (error) {
      console.log(error);
    }
  }

  async function onEditarFaq(faq) {
    try {
      await axios.post(`https://trabalho-faq.herokuapp.com/faq/atualizar`, {
        id: faq.id,
        pergunta: form[faq.id]?.pergunta.trim(),
        resposta: form[faq.id]?.resposta.trim(),
      });

      await fetchFaq();
    } catch (error) {
      console.log(error);
    }
  }

  function onChangeInputEditPergunta(event) {
    setForm({
      ...form,
      [event.target.name]: {
        ...form[event.target.name],
        pergunta: event.target.value,
      },
    });
  }

  function onChangeInputEditResposta(event) {
    setForm({
      ...form,
      [event.target.name]: {
        ...form[event.target.name],
        resposta: event.target.value,
      },
    });
  }

  function onChangeInputAddPergunta(event) {
    setForm({
      ...form,
      [event.target.name]: {
        ...form[event.target.name],
        pergunta: event.target.value,
      },
    });
  }

  function onChangeInputAddResposta(event) {
    setForm({
      ...form,
      [event.target.name]: {
        ...form[event.target.name],
        resposta: event.target.value,
      },
    });
  }

  async function onAddFaq() {
    try {
      await axios.post("https://trabalho-faq.herokuapp.com/faq", {
        pergunta: form.add.pergunta.trim(),
        resposta: form.add.resposta.trim(),
      });
      setForm({ add: { pergunta: "", respost: "" } });
      await fetchFaq();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="faqs">
      <Link to="/covid-faq">
        <Button>Voltar</Button>
      </Link>
      <table>
        <tr>
          <th>Perguntas</th>
          <th>Respostas</th>
          <th>Ações</th>
        </tr>
        {faqs.map((faq) => {
          return (
            <tr key={faq.id}>
              <td>
                <textarea
                  cols="50"
                  rows="5"
                  type="text"
                  name={faq.id}
                  value={form[faq.id]?.pergunta}
                  onChange={onChangeInputEditPergunta}
                />
              </td>
              <td>
                <textarea
                  cols="50"
                  rows="5"
                  name={faq.id}
                  value={form[faq.id]?.resposta}
                  onChange={onChangeInputEditResposta}
                />
              </td>
              <td>
                <Button
                  disabled={
                    faq.pergunta === form[faq.id]?.pergunta &&
                    faq.resposta === form[faq.id]?.resposta
                  }
                  onClick={() => onEditarFaq(faq)}
                >
                  Editar
                </Button>
                <Button onClick={() => onExcluirFaq(faq.id)}>Excluir</Button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td>
            <textarea
              cols="50"
              rows="5"
              name="add"
              value={form?.add?.pergunta}
              onChange={onChangeInputAddPergunta}
            />
          </td>
          <td>
            <textarea
              cols="50"
              rows="5"
              name="add"
              value={form?.add?.resposta}
              onChange={onChangeInputAddResposta}
            />
          </td>
          <td>
            <Button
              disabled={!form?.add?.pergunta || !form?.add?.resposta}
              onClick={onAddFaq}
            >
              Adicionar
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
