import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../firebase/db/ColecaoCliente";
import useClientes from "../hooks/useClientes";

export default function Home() {
  
  const {
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela,
    salvarCliente,
    novoCliente,
    selecionarCliente,
    excluirCliente
    } = useClientes()


  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
        //Início do fragmento  
        <>
        <div className="flex justify-end">
          <Botao onClick={novoCliente} className="mb-4">
            Novo Cliente
          </Botao>
        </div>
        <Tabela clientes={clientes} 
        clienteExcluido={excluirCliente} 
        clienteSelecionado={selecionarCliente}/>
        </>
        //Final do fragmento
        ):(
          <Formulario 
          cancelado={exibirTabela}
          cliente={cliente}
          clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  )
}
